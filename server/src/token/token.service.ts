import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserToken } from './interfaces/user-token.interface';
import { CreateUserTokenDto } from './dto/create-user-token.dto';
import { tokenModelName } from './constants/tokenModelName';

@Injectable()
export class TokenService {
  constructor(@InjectModel(tokenModelName) private readonly tokenModel: Model<UserToken>) {}

  async create(createUserTokenDto: CreateUserTokenDto): Promise<UserToken> {
    return await this.tokenModel.create(createUserTokenDto);
  }

  async delete(uId: string, token: string): Promise<{ ok?: number; n?: number }> {
    return this.tokenModel.deleteOne({ uId, token });
  }

  async deleteAll(uId: string): Promise<{ ok?: number; n?: number }> {
    return this.tokenModel.deleteMany({ uId });
  }

  async exists(uId: string, token: string): Promise<boolean> {
    return await this.tokenModel.exists({ uId, token });
  }
}
