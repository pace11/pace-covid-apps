import React, { useState, createContext, useEffect } from 'react'
import { GetProducts } from '../api'

export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: true,
  })

  useEffect(() => {
    async function fetchDataProducts() {
      await GetProducts()
        .then((res) => {
          if (res === undefined) {
            setProducts({
              data: res,
              isLoading: true,
            })
          } else {
            setProducts({
              data: res,
              isLoading: false,
            })
          }
        })
        .catch((err) => {
          setProducts({
            data: null,
            isLoading: true,
          })
        })
    }
    fetchDataProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  )
}
