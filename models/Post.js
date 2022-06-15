const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { requiredStr, requiredBool } = require('../util/mongooseTypes');

const CommentSchema = require('./Comments');
const PostSchema = new Schema(
  {
    body: requiredStr,
    private: requiredBool,
    comments: [CommentSchema],
  },
  { timestamps: true }
);

module.exports = PostSchema;
