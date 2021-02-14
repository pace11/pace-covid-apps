import React from 'react'
import { ProductProvider } from '../../context/Product'
import { useParams } from 'react-router-dom'
import { truncated } from '../../utils'
import Section from '../../uikit/common/section'
import EditForm from './edit-form'

export default function Home() {
  const { id } = useParams()
  return (
    <ProductProvider>
      <Section
        title={truncated(`Product/Edit/${id}`, 60)}
        column="1fr"
      >
        <EditForm id={id} />
      </Section>
    </ProductProvider>
  )
}
