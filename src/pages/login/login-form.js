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
  h4 {
    text-align: center;
  }
`

export default function LoginForm({
  handleChange,
  handleSubmit,
  data,
  warning,
}) {
  return (
    <Container>
      <h4>
        <i className="fa fa-lock"></i> LOGIN
      </h4>
      <Input
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={(e) => handleChange(e.target.value, 'email')}
      />
      <Input
        placeholder="Password"
        type="password"
        margin="0 0 15px 0"
        value={data.password}
        onChange={(e) => handleChange(e.target.value, 'password')}
        warning={warning}
      />
      <Button block onClick={() => handleSubmit()} size="lg">
        <i className="fa fa-paper-plane"></i> SUBMIT
      </Button>
    </Container>
  )
}
