import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/button'
import theme from '../../common/theme'
import { rupiah, truncated, isLoggedIn } from '../../../utils'

const RouterLink = styled(Link)`
  text-decoration: none;
`

const Container = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
`

const RowImage = styled.div`
  position: relative;
  height: ${(props) => (props.linkTo ? '150px' : '250px')};
  background: ${theme.colors.gray5};
  overflow: hidden;
  img {
    postition: absolute;
    width: 100%;
    height: 100%;
  }
  div {
    display: inline;
    position: absolute;
    z-index: 999;
    right: 0;
    button:first-child {
      margin-right: 5px;
    }
    padding: 5px;
  }
`

const Text = styled.p`
  font-size: ${(props) => props.fontSize || '14px'};
  margin: 10px;
  color: ${(props) => props.color || theme.colors.gray3};
  ${(props) => props}
`

const Detail = styled.div`
  margin: 10px;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    span:first-child {
      color: ${theme.colors.blue};
    }
    span:last-child {
      color: ${theme.colors.gray3};
    }
  }
  div:nth-child(odd) {
    background: ${theme.colors.white2};
  }
  div:nth-child(3) {
    flex-direction: column;
  }
`

/**
 *
 * @param {String} props.linkTo
 * @param {String} props.img_url
 * @param {String} props.title
 * @param {Number} props.price
 */
export default function Card({
  linkTo,
  img_url,
  title,
  price,
  qty,
  sku_no,
  description,
  handleEdit,
  handleDelete,
}) {
  if (!linkTo) {
    return (
      <Container>
        <RowImage>
          <img
            src={img_url}
            alt="img-product"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300'
            }}
          />
        </RowImage>
        <Text>{title}</Text>
        <Text color={theme.colors.blue} fontWeight="bold">
          {rupiah(price)}
        </Text>
        <Detail>
          <div>
            <span>Sku Number</span>
            <span>{sku_no ? sku_no : '-'}</span>
          </div>
          <div>
            <span>Quantity</span>
            <span>{qty ? qty + ' pcs' : '-'}</span>
          </div>
          <div>
            <span>Description</span>
            <span
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </div>
          {isLoggedIn() && (
            <div>
              <Button onClick={() => handleEdit()}>
                <i className="fa fa-edit"></i> Edit
              </Button>
              <Button
                bgColor={theme.colors.red}
                onClick={() => handleDelete()}
              >
                <i className="fa fa-trash"></i> Delete
              </Button>
            </div>
          )}
        </Detail>
      </Container>
    )
  }
  return (
    <RouterLink to={`${linkTo}`}>
      <Container>
        <RowImage linkTo={linkTo}>
          <img
            src={img_url}
            alt="img-product"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300'
            }}
          />
        </RowImage>
        <Text>{truncated(title, 40)}</Text>
        <Text color={theme.colors.blue} fontWeight="bold">
          {rupiah(price)}
        </Text>
      </Container>
    </RouterLink>
  )
}

Card.defaultProps = {
  title: 'Title Card',
}
