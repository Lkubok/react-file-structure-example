import React, { useState, createContext } from "react";

export const ExampleContext = createContext({});

export const ExampleProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  return (
    <ExampleProvider.Provider value={{ active, setActive }}>
      {children}
    </ExampleProvider.Provider>
  );
};
