import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/account" exact component={AccountPage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/project/:projectId" exact component={ProjectPage} />
            <Route path="/admin/users" exact component={UsersPage} />

            <Route path="*" component={NotFoundPage} />
        </Switch>
    </Router>
  )
}
