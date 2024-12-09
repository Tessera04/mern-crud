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

export default function AppRouter() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/register" exact element={<RegisterPage />} />
                <Route path="/account" exact element={<AccountPage />} />
                <Route path="/projects" exact element={<ProjectsPage />} />
                <Route path="/project/:projectId" exact element={<ProjectPage />} />
                <Route path="/admin/users" exact element={<UsersPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    </Router>
  )
}
