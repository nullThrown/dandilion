const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { requiredStr, dateNow } = require('../util/mongooseTypes');

const ConversationSchema = new Schema(
  [
    {
      converser: { type: mongoose.Types.ObjectId, ref: 'user' },
      body: requiredStr,
      sentAt: dateNow,
    },
  ],
  { timestamps: true }
);

module.exports = mongoose.model('conversations', ConversationSchema);
