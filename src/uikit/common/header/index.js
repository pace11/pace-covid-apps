import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import IconUS from '../../../assets/icons/Us'
import IconID from '../../../assets/icons/Id'
import Checkbox from '../../components/checkbox-flag'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

/**
 *
 * @param {String <any>} props.language
 * @param {Function} props.HandleChangeLanguage
 */
export default function Header({ language, HandleChangeLanguage }) {
  return (
    <Container>
      <Checkbox
        value="en"
        isSelected={language}
        onClick={() => HandleChangeLanguage('en')}
      >
        <IconUS />
      </Checkbox>
      <Checkbox
        value="id"
        isSelected={language}
        onClick={() => HandleChangeLanguage('id')}
      >
        <IconID />
      </Checkbox>
    </Container>
  )
}
