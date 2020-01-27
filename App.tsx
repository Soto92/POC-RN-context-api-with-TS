import React, { useState } from "react";
import Router from "./src/routers/router";
import {
  ClientContext,
  Client
} from "./src/layouts/clientLayout/clientContext";
import {
  ProductContext,
  Product
} from "./src/layouts/productsLayout/productsContext";
import {
  ServicesContext,
  Services
} from "./src/layouts/servicesLayout/servicesContext";
import { StatusBar } from "react-native";

const App = () => {
  const [client, setClient] = useState<Client>({
    name: "",
    gender: "",
    age: ""
  });
  const [products, setProducts] = useState<Product>({
    bread: "",
    salad1: "",
    salad2: "",
    meat: "",
    cheese: "",
    sauce: ""
  });
  const [services, setServices] = useState<Services>({
    payment: "",
    delivery: ""
  });
  return (
    <ClientContext.Provider value={{ client, setClient }}>
      <ProductContext.Provider value={{ products, setProducts }}>
        <ServicesContext.Provider value={{ services, setServices }}>
          <StatusBar backgroundColor="#007ACC" barStyle="light-content" />
          <Router />
        </ServicesContext.Provider>
      </ProductContext.Provider>
    </ClientContext.Provider>
  );
};

export default App;
