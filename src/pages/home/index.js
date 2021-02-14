import React from 'react'
import Section from '../../uikit/common/section'
import { ProductsProvider } from '../../context/Products'
import Products from './products'

export default function Home() {
  return (
    <ProductsProvider>
      <Section title="Products">
        <Products />
      </Section>
    </ProductsProvider>
  )
}
