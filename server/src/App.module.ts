import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { configModule } from './configure.root';
import { TokenModule } from './token/token.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    UserModule,
    CardModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
  ],
})
export class AppModule {}
