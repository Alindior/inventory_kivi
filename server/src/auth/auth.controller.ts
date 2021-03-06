import { Body, Controller, Logger, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SingInDto } from './dto/singIn.dto.';
import { ReadableUser } from '../user/interfaces/readable-user.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  async signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<boolean> {
    Logger.log(`SighUp user with credits: \n${JSON.stringify(createUserDto, null, 2)}`);
    await this.authService.signUp(createUserDto);
    return true;
  }

  @Post('/signIn')
  async signIn(@Body(new ValidationPipe()) signInDto: SingInDto): Promise<ReadableUser> {
    Logger.log(`User try to authorization with credits: \n${JSON.stringify(signInDto, null, 2)}`);

    return await this.authService.signIn(signInDto);
  }
}
