import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Theme from '../../common/theme'
import ListMenu from './list_menu'

const StyledContainer = styled.div`
  height: 8vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  width: 100%;
  background: ${Theme.colors.white};
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
