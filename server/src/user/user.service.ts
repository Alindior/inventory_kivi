import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { genSalt, hash } from 'bcryptjs';
import { assignIn } from 'lodash';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ModelName } from './enums/ModelName';

@Injectable()
export class UserService {
  private readonly saltRounds = 10;

  constructor(@InjectModel(ModelName.User) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash = await this.hashPassword(createUserDto.password);
    const createdUser = new this.userModel(assignIn(createUserDto, { password: hash }));
    return await createdUser.save();
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(this.saltRounds);
    return await hash(password, salt);
  }

  async find(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async update(id: string, payload: Partial<User>) {
    return this.userModel.updateOne({ _id: id }, payload);
  }

  async getAll() {
    return this.userModel.find();
  }
}
