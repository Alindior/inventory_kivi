import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  cost: { type: Number, required: true },
  isActive: { type: Boolean, required: true, default: true },
});
