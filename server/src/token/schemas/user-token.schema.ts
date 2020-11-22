import * as mongoose from 'mongoose';
import { userModelName } from '../../user/constants/userModelName';

export const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  uId: { type: mongoose.Types.ObjectId, required: true, ref: userModelName },
  expireAt: { type: Date, required: true },
});

TokenSchema.index({ token: 1, uId: 1 }, { unique: true });
