import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { tokenModelName } from './constants/tokenModelName';
import { TokenSchema } from './schemas/user-token.schema';
import { TokenService } from './token.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: tokenModelName, schema: TokenSchema }])],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
