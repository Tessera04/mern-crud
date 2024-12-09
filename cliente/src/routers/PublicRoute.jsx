import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function Public({ element, ...rest}) {

  const { user } = useAuth();

  if(user){
    return <Navigate to="/projects" replace/>
  }

  return element;
}
