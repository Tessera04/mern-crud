import React from 'react'
import Navigation from '../Navigation'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      { children }
      <h1>Footer</h1>
    </>
  )
}
