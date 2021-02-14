import React from 'react'
import Button from '../../uikit/components/button'
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

export default function LoginForm({
  handleChange,
  handleSubmit,
  data,
}) {
  return (
    <Container>
      <Input
        placeholder="Product Name"
        type="text"
        // value={data.email}
        // onChange={(e) => handleChange(e.target.value, 'email')}
      />
      <Input
        placeholder="Sku No"
        type="text"
        // value={data.email}
        // onChange={(e) => handleChange(e.target.value, 'email')}
      />
      <Input
        placeholder="Price"
        type="number"
        // value={data.email}
        // onChange={(e) => handleChange(e.target.value, 'email')}
      />
      <Input
        placeholder="Qty"
        type="number"
        // value={data.email}
        // onChange={(e) => handleChange(e.target.value, 'email')}
      />
      <Button block onClick={() => handleSubmit()}>
        SUBMIT
      </Button>
    </Container>
  )
}
