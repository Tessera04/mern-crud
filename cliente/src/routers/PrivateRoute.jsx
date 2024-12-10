import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute({ hasRole: role, element, ...rest}) {

  const { user } = useAuth();

  if(role && user?.role !== role){
    return <Navigate to="/" replace />
  } 

  if(!user){
    return <Navigate to="/login" replace/>
  }

  return element;
}
