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
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

export default function AppRouter() {
  return (
    <Router>
        <Layout>
            <Routes>
                {/* Rutas basicas */}
                <Route path={routes.home} exact element={<HomePage />} />
                <Route path={routes.login} exact element={<PublicRoute element={<LoginPage />} />} />
                <Route path={routes.register} exact element={<PublicRoute element={<RegisterPage />} />} />

                {/* Rutas protegidas */}
                <Route path={routes.account} exact element={<PrivateRoute element={<AccountPage />} />} />
                <Route path={routes.projects} exact element={<PrivateRoute element={<ProjectsPage />} />} />
                <Route path={routes.project()} exact element={<PrivateRoute element={<ProjectPage />} />} />
                <Route path={routes.admin.users} exact element={<PrivateRoute hasRole={roles.admin} element={<UsersPage />} />} />

                {/* Ruta no encontrada */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    </Router>
  )
}
