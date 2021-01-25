import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import CardService from '../services/card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../interfaces/card.interface';

@Controller('cards')
export default class CardController {
  constructor(private cardService: CardService) {}

  @Post('/add')
  @UseGuards(AuthGuard())
  async create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    Logger.log('Request started', 'cards/MODULE/add');
    return await this.cardService.create(createCardDto);
  }

  @Get('/')
  @UseGuards(AuthGuard())
  async getAll(): Promise<Card[]> {
    Logger.log('Request start', 'cards/MODULE/getAll');
    return await this.cardService.getAll();
  }

  @Put('/:id')
  @UseGuards(AuthGuard())
  async update(
    @Body() createCardDto: Partial<CreateCardDto>,
    @Param('id') id: string,
  ): Promise<Card> {
    Logger.log('Request start', 'cards/MODULE/update');
    return await this.cardService.update(id, createCardDto);
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  async getOne(@Param('id') id: string): Promise<Card> {
    Logger.log('Request start', 'cards/MODULE/getOne');
    return await this.cardService.getOneById(id);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  async delete(@Param('id') id: string): Promise<void> {
    Logger.log('Request start', 'cards/MODULE/delete');
    await this.cardService.delete(id);
  }
}
