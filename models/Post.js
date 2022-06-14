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
    body: requiredStr,
    private: requiredBool,
    comments: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', PostSchema);
