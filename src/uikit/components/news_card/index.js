import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Theme from '../../common/theme'
import Image from '../../components/image'

const StyledContainer = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 250px;
  display: grid;
  grid-template-columns: 1fr;
  color: ${Theme.colors.black};
  div:first-child {
    border-radius: 10px;
    overflow: hidden;
    height: 150px;
  }
`

const StyledContainerTwo = styled(StyledContainer)`
  padding: 10px 0 0 0;
  width: 100%;
  grid-template-columns: 4fr 6fr;
  grid-gap: 10px;
  div:first-child {
    height: 100px;
  }
`

const StyledTitle = styled.p`
  font-size: 14px;
  margin: 0;
  span {
    font-size: 12px;
    color: ${Theme.colors.gray4};
  }
`

const StyledDate = styled.p`
  font-size: 12px;
  margin: 0;
  span:first-child {
    background: ${Theme.colors.gradientRed};
    color: ${Theme.colors.white};
    border-radius: 5px;
    padding: 0 5px;
    margin: 0 5px 0 0;
  }
  span:not(:first-child) {
    padding: 0 5px;
    text-decoration: underline;
  }
`
/**
 *
 * @param {String} props.linkTo
 * @param {String} props.src
 * @param {String} props.title
 * @param {String} props.author
 * @param {String} props.publishDate
 * @param {String} props.source
 * News Card One to view horizontal scroll
 */
export const NewsCardOne = ({
  linkTo,
  src,
  title,
  author,
  publishDate,
  source,
}) => {
  const { t } = useTranslation()
  return (
    <StyledContainer href={linkTo}>
      <div>
        <Image src={src} alt={src} />
      </div>
      <div>
        <StyledTitle>
          {title}
          <br />
          {author !== 'null' && (
            <span>
              {t('home.by')} {author}
            </span>
          )}
        </StyledTitle>
        <StyledDate>
          <span>{new Date(publishDate).toDateString()}</span>-
          <span>{source}</span>
        </StyledDate>
      </div>
    </StyledContainer>
  )
}

/**
 *
 * @param {String} props.linkTo
 * @param {String} props.src
 * @param {String} props.title
 * @param {String} props.author
 * @param {String} props.publishDate
 * @param {String} props.source
 * News Card Two to view list
 */
export const NewsCardTwo = ({
  linkTo,
  src,
  title,
  author,
  publishDate,
  source,
}) => {
  const { t } = useTranslation()
  return (
    <StyledContainerTwo href={linkTo}>
      <div>
        <Image src={src} alt={src} />
      </div>
      <div>
        <StyledTitle>
          {title}
          <br />
          {author !== 'null' && (
            <span>
              {t('home.by')} {author}
            </span>
          )}
        </StyledTitle>
        <StyledDate>
          <span>{new Date(publishDate).toDateString()}</span>-
          <span>{source}</span>
        </StyledDate>
      </div>
    </StyledContainerTwo>
  )
}
