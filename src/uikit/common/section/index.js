import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Theme from '../../common/theme'
import { Link } from 'react-router-dom'

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
      color: ${Theme.colors.red};
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
`

/**
 *
 * @param {String <any>} props.children
 * @param {String} props.title
 * @param {String} props.linkTo
 */
export default function Section({ title, linkTo, children }) {
  const { t } = useTranslation()

  return (
    <Container>
      <RowTitle>
        <h3>{title}</h3>
        {linkTo && (
          <span>
            <Link to={`${linkTo}`}>{t('home.see_all')}</Link>
          </span>
        )}
      </RowTitle>
      <RowContent>{children}</RowContent>
    </Container>
  )
}
