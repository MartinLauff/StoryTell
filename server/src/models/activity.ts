import mongoose, { ObjectId } from 'mongoose';
// import { ObjectId } from mongoose.Schema.Types;

// An interface that describes the properties
// that are required to create a new Comment
interface ActivityAttrs {
  post?: ObjectId;
  type?: string;
  user?: ObjectId;
  linkToUser?: ObjectId;
}

// An interface that describes the properties
// that a Comment Model has
interface ActivityModel extends mongoose.Model<ActivityDoc> {
  build(attrs: ActivityAttrs): ActivityDoc;
}

// An interface that describes the properties
// that a Comment Document has
interface ActivityDoc extends mongoose.Document {
  post: ObjectId;
  type: string;
  user: ObjectId;
  linkToUser: ObjectId;
}

const activitySchema = new mongoose.Schema<ActivityDoc, ActivityModel>(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    type: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    linkToUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

activitySchema.statics.build = (attrs: ActivityAttrs) => {
  return new Activity(attrs);
};

const Activity = mongoose.model<ActivityDoc, ActivityModel>(
  'Activity',
  activitySchema
);

export { Activity };
