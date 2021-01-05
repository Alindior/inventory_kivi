import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Card } from '../interfaces/card.interface';
import { CreateCardDto } from '../dto/create-card.dto';
import { cardModelName } from '../constants/cardModelName';

@Injectable()
export default class CardService {
  constructor(@InjectModel(cardModelName) private readonly cardModel: Model<Card>) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    return await this.cardModel.create(createCardDto);
  }

  async getAll(): Promise<Card[]> {
    return this.cardModel.find();
  }
}
