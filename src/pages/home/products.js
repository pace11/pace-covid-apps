import React, { useContext } from 'react'
import Card from '../../uikit/components/card'
import { ProductsContext } from '../../context/Products'
import Shimmer from '../../uikit/common/shimmer'

export default function Products() {
  const { products } = useContext(ProductsContext)

  return (
    <React.Fragment>
      {products.data && !products.isLoading ? (
        products.data.map((item, idx) => (
          <Card
            linkTo={`/product/${item.uuid}`}
            key={String(idx)}
            img_url={item.image_url}
            title={item.name}
            price={item.price}
          />
        ))
      ) : (
        <Shimmer number={3} />
      )}
    </React.Fragment>
  )
}
