import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
`
const RowTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }
  span {
    a {
      text-decoration: none;
      color: ${theme.colors.red};
    }
    a:hover {
      text-decoration: underline;
    }
  }
  margin-bottom: 10px;
`

const RowContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${(props) => props.column};
  grid-gap: 10px;
`

/**
 *
 * @param {String} props.title
 * @param {String <any>} props.children
 * @param {Number} props.column
 */
export default function Section({ title, children, column }) {
  return (
    <Container>
      <RowTitle>
        <h4>{title}</h4>
      </RowTitle>
      <RowContent column={column}>{children}</RowContent>
    </Container>
  )
}

Section.defaultProps = {
  column: '1fr 1fr',
}
