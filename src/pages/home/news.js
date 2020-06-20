import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Section from '../../uikit/common/section'
import { NewsCardOne } from '../../uikit/components/news_card'
import Shimmer from '../../uikit/common/shimmer'

const ColLayout = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(40, 1fr);
  grid-gap: 10px;
  overflow-y: scroll;
`

/**
 *
 * @param {Object[Array]>} props.data
 */
export default function News({ data }) {
  const { t } = useTranslation()
  const { initialState } = data
  const { items } = initialState

  return (
    <React.Fragment>
      {initialState.loading ? (
        <Shimmer number={5} />
      ) : (
        <Section title={t('home.news')} linkTo="/news">
          <ColLayout>
            {items &&
              items.articles
                .slice(0, 7)
                .map((item, i) => (
                  <NewsCardOne
                    key={String(i)}
                    title={`${item.title}`}
                    src={`${item.urlToImage}`}
                    publishDate={`${item.publishedAt}`}
                    author={`${item.author}`}
                    source={`${item.source.name}`}
                    linkTo={`${item.url}`}
                  />
                ))}
          </ColLayout>
        </Section>
      )}
    </React.Fragment>
  )
}
