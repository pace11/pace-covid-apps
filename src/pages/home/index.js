import React, { useEffect } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import SectionIndonesia from './in-indonesia'
import SectionGlobal from './in-global'

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`

export default function Home() {
  const dispatch = useStoreDispatch()
  const {
    DataIndonesia: stateDataIndonesia,
    DataGlobalDeath: stateDataGlobalDeath,
    DataGlobalPositive: stateDataGlobalPositive,
    DataGlobalRecover: stateDataGlobalRecover,
  } = useStoreState((globalState) => globalState)

  useEffect(() => {
    dispatch.DataIndonesia.getDataIndonesia()
    dispatch.DataGlobalDeath.getDataGlobalDeath()
    dispatch.DataGlobalPositive.getDataGlobalPositive()
    dispatch.DataGlobalRecover.getDataGlobalRecover()
  }, [
    dispatch.DataIndonesia,
    dispatch.DataGlobalDeath,
    dispatch.DataGlobalPositive,
    dispatch.DataGlobalRecover,
  ])

  return (
    <Layout>
      <Container>
        <SectionIndonesia data={stateDataIndonesia} />
        <br />
        <SectionGlobal
          death={stateDataGlobalDeath}
          positive={stateDataGlobalPositive}
          recover={stateDataGlobalRecover}
        />
      </Container>
    </Layout>
  )
}
