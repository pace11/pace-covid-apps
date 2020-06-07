import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from '../../uikit/components/card'
import Shimmer from '../../uikit/common/shimmer'

const ColLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

export default function InGlobal({ death, positive, recover }) {
  const { t } = useTranslation()
  const { initialState: stateDeath } = death
  const { initialState: statePositive } = positive
  const { initialState: stateRecover } = recover

  return (
    <React.Fragment>
      {stateDeath.loading ? (
        <Shimmer variant="title" />
      ) : (
        <h3>{t('home.covid_in_the_world')}</h3>
      )}
      <ColLayout>
        {statePositive.loading ? (
          <Shimmer number={1} />
        ) : (
          <Card
            title={t('home.positive')}
            number={
              statePositive &&
              statePositive.items &&
              statePositive.items.value
            }
          />
        )}
        {stateRecover.loading ? (
          <Shimmer number={1} />
        ) : (
          <Card
            title={t('home.recovered')}
            number={
              stateRecover &&
              stateRecover.items &&
              stateRecover.items.value
            }
          />
        )}
        {stateDeath.loading ? (
          <Shimmer number={1} />
        ) : (
          <Card
            title={t('home.death')}
            number={
              stateDeath && stateDeath.items && stateDeath.items.value
            }
          />
        )}
      </ColLayout>
    </React.Fragment>
  )
}
