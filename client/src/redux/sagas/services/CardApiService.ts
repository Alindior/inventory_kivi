import axios from 'axios';
import { createCardUrl, getAllUrl } from '../../constants/card';
import { Card, CreateCard } from '../../../types';

export default class CardApiService {
  static async create(createCard: CreateCard): Promise<{ data: Card }> {
    return await axios.post<Card>(createCardUrl, createCard);
  }

  static async getAll(): Promise<{ data: Card[] }> {
    return await axios.get<Card[]>(getAllUrl);
  }

  static async getOne(cardId: string): Promise<{ data: Card }> {
    return await axios.get(`${getAllUrl}/${cardId}`);
  }

  static async update(cardToUpdate: Card) {
    return await axios.put(`${getAllUrl}/${cardToUpdate._id}`, cardToUpdate);
  }

  static async delete(cardId: string) {
    return await axios.delete(`${getAllUrl}/${cardId}`);
  }
}
