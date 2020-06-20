import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../../uikit/common/section'
import styled from 'styled-components'
import Card from '../../uikit/components/card'
import Shimmer from '../../uikit/common/shimmer'

const ColLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

/**
 *
 * @param {Object[Array]} props.data
 */
export default function InIndonesia({ data }) {
  const { t } = useTranslation()
  const { initialState } = data
  const { items } = initialState

  return (
    <React.Fragment>
      {initialState.loading ? (
        <Shimmer variant="card" number={4} />
      ) : (
        <Section title={t('home.covid_in_indonesia')}>
          <ColLayout>
            <Card
              title={t('home.positive')}
              number={items && items[0].positif}
            />
            <Card
              title={t('home.recovered')}
              number={items && items[0].sembuh}
            />
            <Card
              title={t('home.death')}
              number={items && items[0].meninggal}
            />
            <Card
              title={t('home.treated')}
              number={items && items[0].dirawat}
            />
          </ColLayout>
        </Section>
      )}
    </React.Fragment>
  )
}
