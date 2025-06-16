export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IProductList<T> {
  total: number;
  items: T[];
}

export interface IOrder {
  id: string;
  total: number;
}

