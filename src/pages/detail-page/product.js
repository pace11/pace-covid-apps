import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/Product'
import Card from '../../uikit/components/card'
import Shimmer from '../../uikit/common/shimmer'

export default function Product({ id, handleDelete, handleEdit }) {
  const [product, setProductId] = useContext(ProductContext)

  useEffect(() => {
    if (id) {
      setProductId(id)
    }
  }, [id, setProductId])

  return (
    <React.Fragment>
      {product.data && !product.isLoading ? (
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
        <Shimmer number={1} />
      )}
    </React.Fragment>
  )
}
