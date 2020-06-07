import React from 'react'
import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header'

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const RowContent = styled.div`
  height: 92vh;
  overflow: hidden scroll;
  padding: 10px;
`

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <RowContent>{children}</RowContent>
      <Footer />
    </StyledContainer>
  )
}
