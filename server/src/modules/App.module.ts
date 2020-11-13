import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/Authentication.module';

@Module({
  imports: [AuthenticationModule],
  providers: [],
  exports: [],
})
export class AppModule {}
