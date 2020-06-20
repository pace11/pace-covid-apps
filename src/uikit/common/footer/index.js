import React from 'react'
import { useTranslation } from 'react-i18next'
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
  grid-template-columns: repeat(4, 1fr);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <StyledContainer>
      <ListMenu
        item={[
          {
            text: `${t('footer.home')}`,
            link: '/',
          },
          {
            text: `${t('footer.provinces')}`,
            link: '/provinces',
          },
          {
            text: `${t('footer.global')}`,
            link: '/global',
          },
          {
            text: `${t('footer.news')}`,
            link: '/news',
          },
        ]}
        activePath={location.pathname}
      />
    </StyledContainer>
  )
}
