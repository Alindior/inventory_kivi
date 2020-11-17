import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { SingInDto } from './dto/singIn.dto.';
import { ReadableUser } from 'src/user/interfaces/readable-user.interface';

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
