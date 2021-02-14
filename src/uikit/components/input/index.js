import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const StyledContainer = styled.div`
  width: auto;
  height: 40px;
  margin: ${(props) => props.margin};
  span {
    font-size: 12px;
    text-align: left;
    color: ${theme.colors.red};
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: ${theme.colors.gray5};
  :focus {
    border-color: ${theme.colors.blue};
  }
  ::placeholder {
    color: ${theme.colors.gray5};
  }
`

/**
 *
 * @param {String} props.placeholder
 * @param {String, Number <any>} props.value
 * @param {Function} props.onChange
 * @param {String} props.type
 * @param {String} props.margin
 * @param {String} props.warning
 */
export default function Input({
  placeholder,
  value,
  onChange,
  type,
  margin,
  warning,
}) {
  return (
    <StyledContainer margin={margin}>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
      {warning && <span>{warning}</span>}
    </StyledContainer>
  )
}

Input.defaultProps = {
  margin: '0 0 5px 0',
}
