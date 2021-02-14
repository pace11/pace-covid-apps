import React, { useState } from 'react'
import cookies from 'js-cookie'
import { PostLogin } from '../../api'
import Section from '../../uikit/common/section'
import LoginForm from './login-form'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [warning, setWarning] = useState('')

  const HandleSubmit = () => {
    PostLogin(data).then((res) => {
      const { data, statusCode, message } = res
      if (statusCode === 200) {
        cookies.set('user_data_email', JSON.stringify(data.email))
        window.location.href = '/'
      } else {
        setWarning(message)
      }
    })
  }

  const HandleChange = (val, key) => {
    setData({
      ...data,
      [key]: val,
    })
  }

  return (
    <Section column="1fr">
      <LoginForm
        data={data}
        handleChange={HandleChange}
        handleSubmit={HandleSubmit}
        warning={warning}
      />
    </Section>
  )
}
