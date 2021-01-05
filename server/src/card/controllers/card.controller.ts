import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import CardService from '../services/card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../interfaces/card.interface';

@Controller('cards')
export default class CardController {
  constructor(private cardService: CardService) {}

  @Post('/add')
  @UseGuards(AuthGuard())
  async create(@Body() createCardDto: CreateCardDto) {
    Logger.log('Request started', 'cards/MODULE/add');
    await this.cardService.create(createCardDto);
  }

  @Get('/')
  @UseGuards(AuthGuard())
  async getAll(): Promise<Card[]> {
    Logger.log('Request start', 'cards/MODULE/getAll');
    return await this.cardService.getAll();
  }
}
