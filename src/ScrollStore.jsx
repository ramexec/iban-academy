import { createContext, useContext, useState } from "react";

const ScrollContext =
  createContext();

export function ScrollProvider({
  children
}) {

  const [scrollOffset, setScrollOffset] =
    useState(0);

  return (

    <ScrollContext.Provider
      value={{
        scrollOffset,
        setScrollOffset
      }}
    >

      {children}

    </ScrollContext.Provider>

  );

}

export function useScrollStore() {

  return useContext(
    ScrollContext
  );

}