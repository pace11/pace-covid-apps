import React, { useContext, useEffect, useState } from 'react'
import Card from '../../uikit/components/card'
import EditForm from './edit-form'
import { ProductContext } from '../../context/Product'

export default function Product({
  id,
  handleDelete,
  handleEdit,
  showEdit,
}) {
  const [product, setProductId] = useContext(ProductContext)

  useEffect(() => {
    if (id) {
      setProductId(id)
    }
  }, [id, setProductId])

  return (
    <React.Fragment>
      {product.data && !showEdit ? (
        <Card
          img_url={product.data.image_url}
          title={product.data.name}
          price={product.data.price}
          qty={product.data.qty}
          sku_no={product.data.sku_no}
          description={product.data.description}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <EditForm />
      )}
    </React.Fragment>
  )
}
