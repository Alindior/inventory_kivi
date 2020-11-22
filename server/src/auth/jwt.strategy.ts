import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

import { User } from '../user/interfaces/user.interface';
import { TokenService } from '../token/token.service';
import { ErrorService } from '../shared/services/errorService/ErrorService';
import { ErrorMessage } from '../shared/services/errorService/enums/ErrorMessage';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req, user: Partial<User>) {
    const token = req.headers.authorization.slice(7);
    const tokenExists = await this.tokenService.exists(user._id, token);
    if (tokenExists) {
      return user;
    }
    throw ErrorService.createSummaryError(ErrorMessage.Unauthorized, HttpStatus.UNAUTHORIZED);
  }
}
