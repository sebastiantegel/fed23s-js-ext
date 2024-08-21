import { createContext } from "react";
import { IProduct } from "../models/IProduct";

export const ProductContext = createContext<IProduct[]>([]);
