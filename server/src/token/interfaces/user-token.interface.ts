import { Document } from 'mongoose';

export interface UserToken extends Document {
  readonly token: string;
  readonly uId: string;
  readonly expireAt: string;
}
