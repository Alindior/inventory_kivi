import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
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
    return this.authService.signUp(createUserDto);
  }

  @Post('/signIn')
  async signIn(@Body(new ValidationPipe()) signInDto: SingInDto): Promise<ReadableUser> {
    return await this.authService.signIn(signInDto);
  }
}
