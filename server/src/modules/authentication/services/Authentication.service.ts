import { Injectable } from '@nestjs/common';
import { UserService } from '../../../shared/modules/users/services/User.service';

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {}

  async getUsers() {
    return this.userService.findAll();
  }
}
