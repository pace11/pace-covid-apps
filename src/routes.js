// Layout
import Layout from './uikit/common/layout'

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
    component: LoginPage,
  },
]

export default Routes
