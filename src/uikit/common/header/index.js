import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Container = styled.div`
  width: 100%;
  min-height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.gradientRed};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  z-index: 999;
`

export default function Header() {
  return <Container></Container>
}
