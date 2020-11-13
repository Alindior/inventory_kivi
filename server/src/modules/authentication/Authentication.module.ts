import { Module } from '@nestjs/common';
import AuthenticationController from './controllers/Authentication.controller';
import { AuthenticationService } from './services/Authentication.service';
import { UserModule } from '../../shared/modules/users/Users.module';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
