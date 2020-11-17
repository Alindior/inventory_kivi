import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { omit } from 'lodash';
import * as moment from 'moment';

import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignOptions } from 'jsonwebtoken';
import { CreateUserTokenDto } from 'src/token/dto/create-user-token.dto';
import { User } from 'src/user/interfaces/user.interface';
import { SingInDto } from '../dto/singIn.dto.';
import { TokenPayload } from '../interfaces/token-payload.interface';
import { ReadableUser } from '../../user/interfaces/readable-user.interface';
import { ProtectedFields } from '../../user/enums/ProtectedFields';
import { UserToken } from '../../token/interfaces/user-token.interface';

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

      return omit<any>(readableUser, Object.values(ProtectedFields)) as ReadableUser;
    }
    throw new BadRequestException('Invalid credentials');
  }

  async signUser(user: User): Promise<string> {
    const tokenPayload: TokenPayload = {
      _id: user._id,
      name: user.name,
    };
    const token = await this.generateToken(tokenPayload);

    const expireAt = moment().add(1, 'day').toISOString();

    await this.saveToken({
      token,
      expireAt,
      uId: user._id,
    });

    return token;
  }

  private async generateToken(data: TokenPayload, options?: SignOptions): Promise<string> {
    return this.jwtService.sign(data, options);
  }

  private async verifyToken(token): Promise<any> {
    const data = this.jwtService.verify(token) as TokenPayload;
    const tokenExists = await this.tokenService.exists(data._id, token);

    if (tokenExists) {
      return data;
    }
    throw new UnauthorizedException();
  }

  private saveToken(createUserTokenDto: CreateUserTokenDto): Promise<UserToken> {
    return this.tokenService.create(createUserTokenDto);
  }
}
