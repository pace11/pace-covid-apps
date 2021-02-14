import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../uikit/common/theme'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ContainerButton = styled.button`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  heigh: auto;
  padding: ${(props) =>
    props.size === 'lg' ? '10px 15px' : '5px 10px'};
  border-radius: 10px;
  background: ${(props) =>
    props.bgColor ? props.bgColor : theme.colors.blue};
  color: ${theme.colors.white};
  letter-spacing: 1px;
  outline: none;
  border: 0px;
  :active {
    opacity: 0.6;
  }
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`

/**
 *
 * @param {String, <any>} props.children
 * @param {String} props.size
 * @param {String} props.bgColor
 * @param {String} props.linkTo
 * @param {Function} props.onClick
 * @param {Boolean} props.block
 *
 */
export default function Button({
  children,
  size,
  bgColor,
  linkTo,
  onClick,
  block,
}) {
  return (
    <StyledLink to={linkTo}>
      <ContainerButton
        disabled={false}
        size={size}
        bgColor={bgColor}
        onClick={onClick}
        block={block}
      >
        {children}
      </ContainerButton>
    </StyledLink>
  )
}

Button.defaultProps = {
  size: 'sm',
  disabled: false,
  bgColor: theme.colors.blue,
  linkTo: `#`,
}
