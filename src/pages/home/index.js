import React, { useEffect } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import SectionIndonesia from './in-indonesia'
import SectionGlobal from './in-global'
import SectionNews from './news'

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`

export default function Home() {
  const dispatch = useStoreDispatch()
  const {
    DataIndonesia: stateDataIndonesia,
    DataNewsIndonesia: stateDataNewsIndonesia,
    DataGlobalDeath: stateDataGlobalDeath,
    DataGlobalPositive: stateDataGlobalPositive,
    DataGlobalRecover: stateDataGlobalRecover,
  } = useStoreState((globalState) => globalState)

  useEffect(() => {
    dispatch.DataIndonesia.getDataIndonesia()
    dispatch.DataNewsIndonesia.getDataNewsIndonesia()
    dispatch.DataGlobalDeath.getDataGlobalDeath()
    dispatch.DataGlobalPositive.getDataGlobalPositive()
    dispatch.DataGlobalRecover.getDataGlobalRecover()
  }, [
    dispatch.DataIndonesia,
    dispatch.DataNewsIndonesia,
    dispatch.DataGlobalDeath,
    dispatch.DataGlobalPositive,
    dispatch.DataGlobalRecover,
  ])

  return (
    <Layout>
      <Container>
        <SectionIndonesia data={stateDataIndonesia} />
        <SectionGlobal
          death={stateDataGlobalDeath}
          positive={stateDataGlobalPositive}
          recover={stateDataGlobalRecover}
        />
        <SectionNews data={stateDataNewsIndonesia} />
      </Container>
    </Layout>
  )
}
