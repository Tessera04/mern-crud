import { createContext, useState } from "react";
import React from 'react'
import roles from "../helpers/roles";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  //Los const que vemos sirven para recrear un perfil de usuario y uno de cliente sin usuario
  //const [user, setUser] = useState(null)
  const [user, setUser] = useState({ id: 1, role: roles.regular});

  const contextValue = {
    user,
    setUser
  }

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  )
}
