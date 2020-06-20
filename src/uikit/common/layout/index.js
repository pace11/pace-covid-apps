import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

/**
 *
 * @param {String <any>} props.children
 */
export default function Layout({ children }) {
  const [language, setLanguage] = useState('id')
  const { i18n } = useTranslation()

  const HandleChangeLanguage = (e) => {
    setLanguage(e)
    i18n.changeLanguage(e)
  }

  return (
    <StyledContainer>
      <Header
        language={language}
        HandleChangeLanguage={HandleChangeLanguage}
      />
      <RowContent>{children}</RowContent>
      <Footer />
    </StyledContainer>
  )
}
