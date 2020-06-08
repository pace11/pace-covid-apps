import React, { useEffect } from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Layout from '../../uikit/common/layout'
import Shimmer from '../../uikit/common/shimmer'
import ListMenuDropdown from '../../uikit/components/list_menu_dropdown'

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`

const WrapperList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export default function AllProvinces() {
  const dispatch = useStoreDispatch()
  const { DataGlobal: stateDataGlobal } = useStoreState(
    (globalState) => globalState,
  )

  const { initialState } = stateDataGlobal
  const { items } = initialState

  useEffect(() => {
    dispatch.DataGlobal.getDataGlobal()
  }, [dispatch.DataGlobal])

  return (
    <Layout>
      <Container>
        {initialState.loading ? (
          <Shimmer variant="list" number={10} />
        ) : (
          <WrapperList>
            {items &&
              items.map((item, i) => (
                <ListMenuDropdown
                  index={(i += 1)}
                  name={item.attributes.Country_Region}
                  positive={item.attributes.Confirmed}
                  recovered={item.attributes.Recovered}
                  death={item.attributes.Deaths}
                />
              ))}
          </WrapperList>
        )}
      </Container>
    </Layout>
  )
}
