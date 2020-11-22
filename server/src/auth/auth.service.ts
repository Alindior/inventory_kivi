import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { omit } from 'lodash';
import * as moment from 'moment';
import { SignOptions } from 'jsonwebtoken';

import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { CreateUserTokenDto } from '../token/dto/create-user-token.dto';
import { User } from '../user/interfaces/user.interface';
import { SingInDto } from './dto/singIn.dto.';
import { TokenPayload } from './interfaces/token-payload.interface';
import { ReadableUser } from '../user/interfaces/readable-user.interface';
import { ProtectedFields } from '../user/enums/ProtectedFields';
import { UserToken } from '../token/interfaces/user-token.interface';
import { ErrorService } from '../shared/services/errorService/ErrorService';
import { ErrorMessage } from '../shared/services/errorService/enums/ErrorMessage';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<boolean> {
    await this.userService.create(createUserDto);
    return true;
  }

  async signIn({ email, password }: SingInDto): Promise<ReadableUser> {
    const user = await this.userService.findByEmail(email);

    if (user && (await compare(password, user.password))) {
      const token = await this.signUser(user);
      const readableUser = user.toObject() as ReadableUser;
      readableUser.accessToken = token;

      return omit(readableUser, Object.values(ProtectedFields)) as ReadableUser;
    }
    throw ErrorService.createSummaryError(ErrorMessage.UserIsNotExist, HttpStatus.BAD_REQUEST);
  }

  async signUser({ _id, name }: User): Promise<string> {
    const token = await this.generateToken({ _id, name });

    const expireAt = moment().add(1, 'day').toISOString();

    await this.saveToken({
      token,
      expireAt,
      uId: _id,
    });

    return token;
  }

  private async generateToken(data: TokenPayload, options?: SignOptions): Promise<string> {
    return this.jwtService.sign(data, options);
  }

  private saveToken(createUserTokenDto: CreateUserTokenDto): Promise<UserToken> {
    return this.tokenService.create(createUserTokenDto);
  }
}
