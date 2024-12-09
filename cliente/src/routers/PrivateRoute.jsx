import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute({ element, ...rest}) {

  const { user } = useAuth();

  if(!user){
    return <Navigate to="/login" replace/>
  }

  return element;
}
