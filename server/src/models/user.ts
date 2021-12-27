import mongoose, { ObjectId } from 'mongoose';
import validator from 'validator';
import { Password } from '../controllers/auth/password';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  username: string;
  email: string;
  password: string;
  role: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  username: string;
  email: string;
  hobby?: string;
  password: string;
  role: string;
  photo?: string;
  posts?: Array<ObjectId>;
  following?: Array<ObjectId>;
  followers?: Array<ObjectId>;
  savedPosts?: Array<ObjectId>;
}

const userSchema = new mongoose.Schema<UserDoc, UserModel>({
  username: {
    type: String,
    required: [true, 'Please tell us your name!'],
    unique: true,
    trim: true,
    minLength: 4,
    maxLength: 14,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  hobby: {
    type: String,
    required: [true, 'Please provide a hobby'],
    default: 'Your hobby',
    trim: true,
    minLength: 2,
    maxLength: 18,
  },
  photo: { type: String, default: '/default.png' },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
    minLength: 8,
    maxLength: 20,
    trim: true,
    select: false,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  savedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

//Hashes the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }

  next();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
