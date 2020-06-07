import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ListMenu from './list_menu'

const StyledContainer = styled.div`
  height: 100%;
  display: grid;
  width: 100%;
  grid-template-columns: 33.33% 33.33% 33.33%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`

export default function Footer() {
  const location = useLocation()
  return (
    <StyledContainer>
      <ListMenu
        item={[
          { text: 'Home', link: '/' },
          { text: 'Provinces', link: '/provinces' },
          { text: 'Global', link: '/global' },
        ]}
        activePath={location.pathname}
      />
    </StyledContainer>
  )
}
