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
  const { DataAllProvinces: stateDataAllProvinces } = useStoreState(
    (globalState) => globalState,
  )

  const { initialState } = stateDataAllProvinces
  const { items } = initialState

  useEffect(() => {
    dispatch.DataAllProvinces.getDataAllProvinces()
  }, [dispatch.DataAllProvinces])

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
                  key={String(i)}
                  index={(i += 1)}
                  name={item.attributes.Provinsi}
                  positive={item.attributes.Kasus_Posi}
                  recovered={item.attributes.Kasus_Semb}
                  death={item.attributes.Kasus_Meni}
                />
              ))}
          </WrapperList>
        )}
      </Container>
    </Layout>
  )
}
