export interface Card {
  _id: string;
  name: string;
  cost: number;
  isActive: boolean;
}

export interface CreateCard {
  name: string;
  cost: number;
  isActive: boolean;
}

export interface CardState {
  cards: Card[];
  card: Card | null;
  isLoadingOne: boolean;
  isLoading: boolean;
  isLoadingUpdate: boolean;
  isLoadingDelete: boolean;
  isLoadingCreate: boolean;
}
