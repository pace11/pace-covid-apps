import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const ContainerRadio = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: ${(props) =>
    props.isSelected ? `2px solid ${theme.colors.white}` : ``};
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) =>
    props.isSelected ? 'rgba(239, 69, 7, 0.1)' : 'transparent'};
  margin: 10px;
`

function TypeA({ children, value, isSelected, onClick }) {
  return (
    <ContainerRadio
      isSelected={isSelected === value ? true : false}
      data-value={value}
      onClick={onClick}
    >
      <div>{children}</div>
    </ContainerRadio>
  )
}

export default TypeA
