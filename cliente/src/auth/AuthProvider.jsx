import { createContext, useState } from "react";
import React from 'react'
import roles from "../helpers/roles";
import routes from "../helpers/routes";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  //Los const que vemos sirven para recrear un perfil de usuario y uno de cliente sin usuario
  const [user, setUser] = useState(null)
  //const [user, setUser] = useState({ id: 1, role: roles.regular});
  const history = useHistory();
  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role; 

  //Estas funciones son precarias por el momento, despues hay que comunicarlas al backend
  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, role: roles.regular});
    history.push(fromLocation);
  };
  const logout = () => setUser(null);

  const contextValue = {
    user,
    setUser,
    isLogged,
    hasRole,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  )
}
