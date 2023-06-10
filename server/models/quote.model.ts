import pkg from 'mongoose';
const { Schema, model } = pkg;

const quoteSchema = new Schema({
  quoteText: { type: String, required: true },
  authorName: { type: String, required: true }
});

export default model('Quote', quoteSchema);