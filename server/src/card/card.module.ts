import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { CardSchema } from './schemas/card.schema';
import { cardModelName } from './constants/cardModelName';
import CardService from './services/card.service';
import CardController from './controllers/card.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: cardModelName, schema: CardSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
