import React, { createContext, SetStateAction } from "react";

export interface Services {
  payment: string;
  delivery: string;
}

export interface ServicesContext {
  services: Services;
  setServices: React.Dispatch<SetStateAction<Services>>;
}

export const ServicesContext = createContext<ServicesContext>({
  services: {
    payment: "",
    delivery: "",
  },
  setServices: () => {}
});
