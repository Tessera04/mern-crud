import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function Navigation() {
  const { logout } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark'>
        <Navbar.Brand as={NavLink} to={routes.home}>Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
                <Nav.Link as={NavLink} to={routes.home}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={routes.projects}>Projects</Nav.Link>
                <NavDropdown title="Admin">
                    <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                <Nav.Link as={NavLink} to={routes.register}>Register</Nav.Link>
                <Nav.Link as={NavLink} to={routes.account}>Account</Nav.Link>
                <Nav.Link to={routes.home} onClick={logout}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
