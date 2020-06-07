import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Theme from '../../common/theme'

const WrapperList = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.currentpath === 'Y'
      ? `inset 0 -3px 0 ${Theme.colors.red}`
      : ''};
  background: ${(props) =>
    props.currentpath === 'Y' ? '#ffebef' : 'none'};
  color: ${(props) =>
    props.currentpath === 'Y' ? Theme.colors.red : Theme.colors.gray};
  font-weight: ${(props) =>
    props.currentpath === 'Y' ? 'bold' : 'none'};
  :active {
    color: ${Theme.colors.red};
  }
  font-size: 14px;
`

export default function ListMenu({ item, activePath }) {
  return (
    <React.Fragment>
      {item &&
        item.map((item, i) => (
          <WrapperList
            key={String(i)}
            currentpath={item.link === activePath ? 'Y' : 'T'}
            to={`${item.link}`}
          >
            {item.text}
          </WrapperList>
        ))}
    </React.Fragment>
  )
}
