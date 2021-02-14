import React from 'react'
import { Redirect } from 'react-router-dom'
// Layout
import Layout from './uikit/common/layout'
import { isLoggedIn } from './utils'

// pages
import HomePage from './pages/home'
import DetailPage from './pages/detail-page'
import EditPage from './pages/edit-page'
import LoginPage from './pages/login'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: HomePage,
  },
  {
    path: '/product/:id',
    exact: true,
    layout: Layout,
    component: DetailPage,
  },
  {
    path: '/product/edit/:id',
    exact: true,
    layout: Layout,
    component: EditPage,
  },
  {
    path: '/login',
    exact: true,
    layout: Layout,
    isLoggedIn: isLoggedIn(),
    component: LoginPage,
    redirectComponent: () => <Redirect to="/" />,
  },
]

export default Routes
