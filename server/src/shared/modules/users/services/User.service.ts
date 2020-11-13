import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserProviderName } from '../enums/UserProviderName';
import { User } from '../models/User.interface';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(@Inject(UserProviderName.UserModel) private userModel: Model<User>) {}

  async create(createUserDto: User) {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async delete(id: string) {
    try {
      const user = await this.userModel.findOneAndDelete({ _id: id });
      // const users = await this.userModel.findById(id);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById({ _id: id });
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }
}
