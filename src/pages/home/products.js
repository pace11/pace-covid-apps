import React, { useContext } from 'react'
import Card from '../../uikit/components/card'
import { ProductsContext } from '../../context/Products'

export default function Products() {
  const { products } = useContext(ProductsContext)

  return (
    <React.Fragment>
      {products.data &&
        products.data.map((item, idx) => (
          <Card
            linkTo={`/product/${item.uuid}`}
            key={String(idx)}
            img_url={item.image_url}
            title={item.name}
            price={item.price}
          />
        ))}
    </React.Fragment>
  )
}
