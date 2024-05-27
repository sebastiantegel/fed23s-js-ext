import type { IProduct } from "@/models/IProduct";
import { get } from "./serviceBase";

const BASE_URL =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

export const getProducts = async (): Promise<IProduct[]> => {
  return await get<IProduct[]>(BASE_URL);
};
