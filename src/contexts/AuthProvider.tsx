/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Feb 15 2022 11:46:33 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import axios from 'axios';
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState();

  const signin = async (
    { username, password }: { username: string; password: string },
    callback: VoidFunction
  ) => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    if (data) {
      setUser(data);
    }

    return data;
  };

  const value = {
    user,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
