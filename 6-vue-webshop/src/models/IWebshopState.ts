import type { ICartItem } from "./ICartItem";
import type { IProduct } from "./IProduct";

export interface IWebshopState {
  products: IProduct[];
  cart: ICartItem[];
  showCheckout: boolean;
}
