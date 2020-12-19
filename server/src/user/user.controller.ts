import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async getOne(@Body() user: User) {
    return this.userService.findByEmail(user.email);
  }

  @Get()
  @UseGuards(AuthGuard())
  async getAll() {
    return this.userService.getAll();
  }
}
