import React, { useEffect } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import Card from '../../uikit/components/card'
import Shimmer from '../../uikit/common/shimmer'

const Container = styled.div`
  margin-top: 60px;
`

const ColLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

export default function Home() {
  const dispatch = useStoreDispatch()
  const { DataIndonesia: stateDataIndonesia } = useStoreState(
    (globalState) => globalState,
  )

  const { initialState } = stateDataIndonesia
  const { items } = initialState

  useEffect(() => {
    dispatch.DataIndonesia.getDataIndonesia()
  }, [dispatch.DataIndonesia])

  return (
    <Layout>
      <Container>
        <ColLayout>
          {initialState.loading ? (
            <Shimmer number={4} />
          ) : (
            <React.Fragment>
              <Card
                title="Total Positif"
                number={items && items[0].positif}
              />
              <Card
                title="Total Sembuh"
                number={items && items[0].sembuh}
              />
              <Card
                title="Total Meninggal"
                number={items && items[0].meninggal}
              />
              <Card
                title="Total Dirawat"
                number={items && items[0].dirawat}
              />
            </React.Fragment>
          )}
        </ColLayout>
      </Container>
    </Layout>
  )
}
