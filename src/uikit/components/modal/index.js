import React from 'react'
import styled, { keyframes } from 'styled-components'

const animateZoom = keyframes`
from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`

const StyledFilterBackground = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
  box-sizing: border-box;
`

const ContainerModal = styled.div`
  position: fixed;
  z-index: 999;
  width: 300px;
  max-height: 520px;
  background: #fff;
  padding: 20px;
  margin: 10% auto;
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  -webkit-animation-name: ${animateZoom};
  -webkit-animation-duration: 0.4s;
  animation-name: ${animateZoom};
  animation-duration: 0.4s;
`

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  p {
    position: absolute;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
  span {
    position: absolute;
    color: #aaa;
    right: 0;
    top: -10px;
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: bold;
    :hover,
    :active {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
`

const ModalContent = styled.div`
  width: 100%;
  max-height: 490px;
  overflow-y: scroll;
  scroll-padding-right: 50px;
`

/**
 *
 * @param {Boolean} props.show
 * @param {Function} props.onClick
 * @param {String} props.title
 * @param {String <any>} props.children
 * @param {String <any>} props.width
 */
export default function Modal({
  show,
  onClick,
  title,
  children,
  width,
}) {
  if (!show) {
    return null
  } else {
    return (
      <React.Fragment>
        <StyledFilterBackground onClick={(e) => onClick(e)} />
        <ContainerModal>
          <ModalHeader>
            <p>{title}</p>
            <span onClick={(e) => onClick(e)}>&times;</span>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ContainerModal>
      </React.Fragment>
    )
  }
}
