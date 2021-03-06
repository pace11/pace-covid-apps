import React from 'react'
import styled from 'styled-components'
import Theme from './uikit/common/theme'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Theme.colors.gradientRed};
  flex-direction: column;
  svg {
    margin-left: 15px;
    transform: scale(0.7);
  }
  p {
    font-weight: bold;
    color: ${Theme.colors.white};
    font-size: 20px;
  }
`

const WrapperLogo = styled.div`
  width: 150px;
  height: 120px;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`

const Copyright = styled.div`
  text-align: center;
  p {
    font-size: 14px;
    text-decoration: underline;
    margin: 0;
  }
  small {
    color: ${Theme.colors.white};
  }
`

export default function SplashScreen() {
  return (
    <Container>
      <p>COVID 19 APPS MONITORING</p>
      <WrapperLogo>Pace</WrapperLogo>
      Loading ...
      <Copyright>
        <p>by @ryanpace11</p>
        <small>App version 1.0.0</small>
      </Copyright>
    </Container>
  )
}
