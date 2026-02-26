import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const value = {
    user,
    setUser,
    loading,
    setLoading,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
