const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
  requiredNum,
  requiredStr,
  requiredBool,
  currentTime,
} = require('../util/mongooseTypes');

const UserSchema = new Schema(
  {
    username: { ...requiredStr, unique: true },
    email: { ...requiredStr, unique: true },
    password: requiredStr,
    birthday: requiredDate,
    gender: requiredStr,
    city: requiredStr,
    country: requiredStr,
    zipcode: requiredNum,
    profilePhoto: requiredStr,
    posts: { type: Schema.Types.ObjectId, ref: 'posts' },
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    settings: {
      distance: requiredNum,
      minAge: requiredNum,
      maxAge: requiredNum,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
