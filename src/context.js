import React, { useState, createContext, useReducer, useEffect } from 'react';

let reducer = (info, newInfo) => {
  if (newInfo === null) {
    localStorage.removeItem("info");
    return null;
  }
  return { ...info, ...newInfo };
}

const initialState = {email: '', ratings: []};

const localState = JSON.parse(localStorage.getItem("info"));

export const Context = createContext();

const UserProvider = ({ children }) => {
  const [info, setInfo] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  return (
    <Context.Provider value={[info, setInfo]}>{children}</Context.Provider>
  );
};

export default UserProvider;