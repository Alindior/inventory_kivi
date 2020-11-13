import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from '../services/Authentication.service';

@Controller('auth')
export default class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Get()
  getAll() {
    return this.authenticationService.getUsers();
  }
}
