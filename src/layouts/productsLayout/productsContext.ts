import React, { createContext, useState, SetStateAction } from "react";

export interface Product {
  bread: string;
  salad1: string;
  salad2: string;
  meat: string;
  cheese: string;
  sauce: string;
}

export interface ProductContext {
  products: Product;
  setProducts: React.Dispatch<SetStateAction<Product>>;
}

export const ProductContext = createContext<ProductContext>({
  products: {
    bread: "",
    salad1: "",
    salad2: "",
    meat: "",
    cheese: "",
    sauce: ""
  },
  setProducts: () => {}
});
