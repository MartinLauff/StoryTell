import mongoose, { ObjectId } from 'mongoose';
import slugify from 'slugify';

// An interface that describes the properties
// that are required to create a new Post
interface PostAttrs {
  topic: string;
  title: string;
  content: string;
  postedBy: ObjectId;
  coverImage?: string;
}

// An interface that describes the properties
// that a Post Model has
interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

// An interface that describes the properties
// that a Post Document has
interface PostDoc extends mongoose.Document {
  topic: string;
  title: string;
  slug: string;
  coverImage?: string;
  content: string;
  likes?: Array<ObjectId>;
  postedBy: ObjectId;
}

const postSchema = new mongoose.Schema<PostDoc, PostModel>(
  {
    topic: { type: String, required: true },
    title: {
      type: String,
      trim: true,
      required: true,
      minLength: 5,
    },
    slug: String,
    coverImage: String,
    content: {
      type: String,
      trim: true,
      required: [true, 'Post must have a text.'],
      minLength: 10,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.index({ slug: 1 });

// Virtual populate
postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});

postSchema.pre('save', function (next) {
  this.slug = slugify(this.topic, { lower: true });
  next();
});

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export { Post };
