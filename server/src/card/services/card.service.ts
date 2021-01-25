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

  async update(cardId: string, createCardDto: Partial<CreateCardDto>): Promise<Card> {
    await this.cardModel.updateOne({ _id: cardId }, createCardDto);

    return this.cardModel.findById(cardId);
  }

  async getOneById(cardId: string): Promise<Card> {
    return this.cardModel.findById(cardId);
  }

  async delete(cardId: string): Promise<void> {
    await this.cardModel.findOneAndDelete({ _id: cardId });
  }
}
