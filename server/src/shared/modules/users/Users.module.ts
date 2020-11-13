import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './services/User.service';
import { userProvider } from './providers/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserService, ...userProvider],
  exports: [UserService],
})
export class UserModule {}
