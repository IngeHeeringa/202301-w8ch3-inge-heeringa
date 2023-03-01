export interface Client {
  username: string;
  email: string;
  isLogged: boolean;
  shoppingCart: Painting[];
  orders: OrderStatus[];
}

export interface Painting {
  name: string;
  artist: string;
  price: number;
  image: string;
  description: string;
  isAvailable: boolean;
}

export enum OrderStatus {
  pending,
  delivered,
  returned,
  lost,
  cancelled,
}
