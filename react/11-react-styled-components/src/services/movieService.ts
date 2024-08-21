import axios from "axios";
import { IProduct } from "../models/IProduct";

export const getMovies = async (): Promise<IProduct[]> => {
  const response = await axios.get<IProduct[]>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );

  return response.data;
};

export const getMovie = async (endpoint: string): Promise<IProduct> => {
  const response = await axios.get<IProduct>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products" +
      endpoint
  );

  return response.data;
};
