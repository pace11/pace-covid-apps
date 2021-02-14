import React from 'react'
import styled from 'styled-components'
import Header from '../header'

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const Content = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden scroll;
  padding: 10px;
`

/**
 *
 * @param {String <any>} props.children
 */
export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}
