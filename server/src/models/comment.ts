import mongoose, { ObjectId } from 'mongoose';

// An interface that describes the properties
// that are required to create a new Comment
interface CommentAttrs {
  postedBy: ObjectId;
  post: ObjectId;
  content: string;
}

// An interface that describes the properties
// that a Comment Model has
interface CommentModel extends mongoose.Model<CommentDoc> {
  build(attrs: CommentAttrs): CommentDoc;
}

// An interface that describes the properties
// that a Comment Document has
interface CommentDoc extends mongoose.Document {
  postedBy: ObjectId;
  post: ObjectId;
  content: string;
}

const commentSchema = new mongoose.Schema<CommentDoc, CommentModel>(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Comment must belong to a user.'],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Comment must belong to a post.'],
    },
    content: {
      type: String,
      required: [true, 'Comment must have a text.'],
      minLength: 4,
      maxLength: 30,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.index({ postedBy: 1, post: 1 });

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'postedBy',
    select: 'username photo',
  });

  next();
});

commentSchema.statics.build = (attrs: CommentAttrs) => {
  return new Comment(attrs);
};

const Comment = mongoose.model<CommentDoc, CommentModel>(
  'Comment',
  commentSchema
);

export { Comment };
