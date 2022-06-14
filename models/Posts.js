const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
  requiredNum,
  requiredStr,
  requiredBool,
  currentTime,
} = require('../util/mongooseTypes');

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    data: [PostSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', PostSchema);
