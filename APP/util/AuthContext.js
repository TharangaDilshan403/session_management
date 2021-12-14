import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [changeBtnTxt, setChangeBtnTxt] = useState();
  const contextValue = {
    changeBtnTxt, setChangeBtnTxt
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};