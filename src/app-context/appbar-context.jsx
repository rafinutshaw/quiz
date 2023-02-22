import React, { createContext, useState } from "react";

export const AppbarContext = createContext();

export const AppbarProvider = (props) => {
  const [title, setTitle] = useState("");

  return (
    <AppbarContext.Provider value={{ title, setTitle }}>
      {props.children}
    </AppbarContext.Provider>
  );
};
