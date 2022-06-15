const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { requiredStr } = require('../util/mongooseTypes');

const CommentSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: 'user' },
    body: requiredStr,
  },
  { timestamps: true }
);

module.exports = CommentSchema;
