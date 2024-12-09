import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layouts/Layout';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Router>
        <Layout>
            <Routes>
                {/* Rutas basicas */}
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<PrivateRoute element={<LoginPage />} />} />
                <Route path="/register" exact element={<PrivateRoute element={<RegisterPage />} />} />

                {/* Rutas protegidas */}
                <Route path="/account" exact element={<PrivateRoute element={<AccountPage />} />} />
                <Route path="/projects" exact element={<PrivateRoute element={<ProjectsPage />} />} />
                <Route path="/project/:projectId" exact element={<PrivateRoute element={<ProjectPage />} />} />
                <Route path="/admin/users" exact element={<PrivateRoute element={<UsersPage />} />} />

                {/* Ruta no encontrada */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    </Router>
  )
}
