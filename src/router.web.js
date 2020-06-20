import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import AllProvinces from './pages/all-provinces'
import AllGlobal from './pages/all-global'
import News from './pages/news'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/provinces" exact component={AllProvinces} />
      <Route path="/global" exact component={AllGlobal} />
      <Route path="/news" exact component={News} />
    </BrowserRouter>
  )
}
