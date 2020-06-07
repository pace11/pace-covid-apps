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
    props.currentPath ? `inset 0 -3px 0 ${Theme.colors.red}` : ''};
  background: ${(props) => (props.currentPath ? '#ffebef' : 'none')};
  color: ${(props) =>
    props.currentPath ? Theme.colors.red : Theme.colors.gray};
  font-weight: ${(props) => (props.currentPath ? 'bold' : 'none')};
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
            currentPath={item.link === activePath ? true : false}
            to={`${item.link}`}
          >
            {item.text}
          </WrapperList>
        ))}
    </React.Fragment>
  )
}
