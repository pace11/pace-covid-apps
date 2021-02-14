import React, { useState, createContext, useEffect } from 'react'
import { GetProductById } from '../api'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [productId, setProductId] = useState('')
  const [product, setProduct] = useState({
    data: null,
    isLoading: true,
  })

  useEffect(() => {
    if (productId) {
      async function fetchDataProduct() {
        await GetProductById(productId)
          .then((res) => {
            if (res === undefined) {
              setProduct({
                data: res,
                isLoading: true,
              })
            } else {
              setProduct({
                data: res,
                isLoading: false,
              })
            }
          })
          .catch((err) => {
            setProduct({
              data: null,
              isLoading: false,
            })
          })
      }
      fetchDataProduct()
    }
  }, [productId])

  return (
    <ProductContext.Provider value={[product, setProductId]}>
      {props.children}
    </ProductContext.Provider>
  )
}
