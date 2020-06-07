import React from 'react'
import styled from 'styled-components'
import Footer from '../footer'

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const RowContent = styled.div`
  height: 92vh;
  overflow: hidden scroll;
`

const RowFooter = styled.div`
  height: 8vh;
`

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <RowContent>{children}</RowContent>
      <RowFooter>
        <Footer />
      </RowFooter>
    </StyledContainer>
  )
}
