import React, { useState, useEffect } from 'react'
import { StoreProvider } from 'easy-peasy'
import store from './redux/store'
import WrapperBody from './Styled-Body'
import SplashScreen from './splash-screen'
import RouterWeb from './router.web'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading((loading) => !loading)
    }, 3000)
  }, [])

  return (
    <WrapperBody>
      <StoreProvider store={store}>
        {loading ? <SplashScreen /> : <RouterWeb />}
      </StoreProvider>
    </WrapperBody>
  )
}
