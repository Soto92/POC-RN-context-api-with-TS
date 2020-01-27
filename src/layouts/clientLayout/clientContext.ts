import React, { createContext, useState, SetStateAction } from "react";

export interface Client {
  name: string;
  gender: string;
  age: string;
}

export interface ClientContext {
  client: Client;
  setClient: React.Dispatch<SetStateAction<Client>>;
}

export const ClientContext = createContext<ClientContext>({
  client: { name: "", age: "", gender: "" },
  setClient: () => {}
});

