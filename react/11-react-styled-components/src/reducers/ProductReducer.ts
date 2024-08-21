import { IProduct } from "../models/IProduct";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  LOADED,
  SELECTED,
}

export const ProductReducer = (products: IProduct[], action: IAction) => {
  switch (action.type) {
    case ActionType.LOADED:
      return JSON.parse(action.payload);

    case ActionType.SELECTED:
      return products.map((product) => {
        if (product.id === +action.payload)
          return { ...product, selected: !product.selected };
        return product;
      });

    default:
      return products;
  }
};
