import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import Theme from '../../uikit/common/theme'
import { NewsCardTwo } from '../../uikit/components/news_card'
import Shimmer from '../../uikit/common/shimmer'

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`

const ColLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  a:not(:first-child) {
    border-top: 1px solid ${Theme.colors.gray5};
  }
`

export default function News() {
  const { t } = useTranslation()
  const dispatch = useStoreDispatch()
  const { DataNewsIndonesia: stateDataNewsIndonesia } = useStoreState(
    (globalState) => globalState,
  )

  useEffect(() => {
    dispatch.DataNewsIndonesia.getDataNewsIndonesia()
  }, [dispatch.DataNewsIndonesia])

  const { initialState } = stateDataNewsIndonesia
  const { items } = initialState

  return (
    <Layout>
      <Container>
        {initialState.loading ? (
          <Shimmer variant="card-news-list" number={10} />
        ) : (
          <Section title={t('home.news')}>
            <ColLayout>
              {items &&
                items.articles.map((item, i) => (
                  <NewsCardTwo
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
      </Container>
    </Layout>
  )
}
