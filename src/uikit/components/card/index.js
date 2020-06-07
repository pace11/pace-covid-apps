import React from 'react'
import styled, { keyframes } from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  background: ${Theme.colors.gradientRed};
  overflow: hidden;
  &:after {
    border-top: 40px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 40px solid transparent;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    content: '';
    top: 0;
    left: 70%;
    height: 0;
    width: 0;
    background: #fff;
    opacity: 0.1;
  }
  &:before {
    border-top: 30px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 30px solid transparent;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    content: '';
    top: 50px;
    left: 60%;
    height: 0;
    width: 0;
    background: #fff;
    opacity: 0.1;
  }
`

const AnimationZoom = keyframes`
from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  animation: ${AnimationZoom} 0.3s ease-in 0.3s forwards;
  small {
    color: ${Theme.colors.white};
    text-transform: uppercase;
  }
  small:not(:first-child) {
    color: ${Theme.colors.white};
    text-transform: uppercase;
    font-size: 10px;
  }
  p {
    margin: 5px 0;
    font-size: 25px;
    font-weight: bold;
    color: ${Theme.colors.white};
  }
`

/**
 *
 * @param {String} props.title
 * @param {String <any>} props.number
 */
export default function Card({ title, number }) {
  return (
    <Container>
      <Content>
        <small>{title}</small>
        <p>{number}</p>
        <small>Orang</small>
      </Content>
    </Container>
  )
}
