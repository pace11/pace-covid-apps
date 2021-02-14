import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/Product'
import { EditProduct } from '../../api'
import Button from '../../uikit/components/button'
import ReactQuill from 'react-quill'
import styled from 'styled-components'
import Input from '../../uikit/components/input'

const Container = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
  flex-direction: column;
  height: auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  padding: 15px;
  h5 {
    text-align: center;
  }
`

export default function LoginForm({ id }) {
  const [product, setProductId] = useContext(ProductContext)
  const [data, setData] = useState({
    name: '',
    description: '',
    sku_no: '',
    price: '',
    qty: '',
  })

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  const HandleSubmit = () => {
    EditProduct(id, data).then((res) => {
      const { statusCode } = res
      if (statusCode === 200) {
        window.location.href = `/product/${id}`
      }
    })
  }

  useEffect(() => {
    if (id) {
      setProductId(id)
    }
  }, [id, setProductId])

  useEffect(() => {
    if (product) {
      setData({
        name: product && product.data && product.data.name,
        description:
          product && product.data && product.data.description,
        sku_no: product && product.data && product.data.sku_no,
        price: product && product.data && product.data.price,
        qty: product && product.data && product.data.qty,
      })
    }
  }, [product])

  return (
    <Container>
      <Input
        placeholder="Product Name"
        type="text"
        value={data.name}
        onChange={(e) => HandleChange(e.target.value, 'name')}
      />
      <ReactQuill
        placeholder="Product Description"
        value={data.description}
        onChange={(val) => HandleChange(val, 'description')}
        style={{ height: '100px' }}
      />
      <Input
        placeholder="Sku No"
        type="text"
        value={data.sku_no}
        onChange={(e) => HandleChange(e.target.value, 'sku_no')}
        margin="50px 0 0 0"
      />
      <Input
        placeholder="Price"
        type="number"
        value={data.price}
        onChange={(e) => HandleChange(e.target.value, 'price')}
      />
      <Input
        placeholder="Qty"
        type="number"
        value={data.qty}
        onChange={(e) => HandleChange(e.target.value, 'qty')}
      />
      <Button block onClick={() => HandleSubmit()} size="lg">
        SUBMIT
      </Button>
    </Container>
  )
}
