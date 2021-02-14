import React from 'react'
import { useHistory } from 'react-router-dom'
import { isLoggedIn, isLoggedOut } from '../../../utils'
import styled from 'styled-components'
import theme from '../theme'
import Button from '../../components/button'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: ${theme.colors.blue2};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  z-index: 999;
  padding: 0 10px;
  border-radius: 10px;
  img {
    cursor: pointer;
    width: 150px;
  }
`

export default function Header() {
  const history = useHistory()

  const ClickTitle = () => {
    history.push({
      pathname: '/',
    })
  }

  return (
    <Container>
      <img
        onClick={() => ClickTitle()}
        src={require('../../../assets/image/jubelio.png')}
        alt="img-logo"
      />
      {isLoggedIn() ? (
        <Button
          bgColor={theme.colors.red}
          onClick={() => isLoggedOut()}
        >
          <i className="fa fa-sign-out-alt"></i> Logout
        </Button>
      ) : (
        <Button bgColor={theme.colors.blue} linkTo={`/login`}>
          <i className="fa fa-sign-in-alt"></i> Login
        </Button>
      )}
    </Container>
  )
}
