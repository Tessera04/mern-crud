import React from 'react'
import useAuth from '../auth/useAuth';
import { useLocation } from 'react-router-dom';

const userCredentials = {};

export default function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login(userCredentials, location.state?.from)}>Login</button>
    </div>
  )
}
