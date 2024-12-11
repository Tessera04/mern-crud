import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({ hasRole: role, element, ...rest}) {
  const location = useLocation();
  const { hasRole, isLogged } = useAuth();

  if(role && !hasRole(role)){
    return <Navigate to={routes.home} replace />
  } 

  if(!isLogged()){
    return <Navigate to={routes.login} state={{ from: location }} replace/>
  }

  return element;
}
