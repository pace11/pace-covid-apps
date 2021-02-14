import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { DeleteProduct } from '../../api'
import Section from '../../uikit/common/section'
import Modal from '../../uikit/components/modal'
import Button from '../../uikit/components/button'
import theme from '../../uikit/common/theme'
import Product from './product'
import { ProductProvider } from '../../context/Product'

export default function Home() {
  const history = useHistory()
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  const HandleDelete = () => {
    setShowModal(!showModal)
  }

  const ConfirmDelete = () => {
    DeleteProduct(id).then((res) => {
      setShowModal(!showModal)
      const { statusCode } = res
      if (statusCode === 200) {
        window.location.href = '/'
      }
    })
  }

  const HandleEdit = () => {
    history.push({
      pathname: `/product/edit/${id}`,
    })
  }

  return (
    <ProductProvider>
      <Section title="Product/Detail" column="1fr">
        <Product
          id={id && id}
          handleDelete={HandleDelete}
          handleEdit={HandleEdit}
        />
      </Section>
      <Modal
        show={showModal}
        title="Confirmation"
        onClick={() => setShowModal(!showModal)}
      >
        <p>Are you sure to delete product ?</p>
        <Button
          bgColor={theme.colors.red}
          size="lg"
          onClick={() => ConfirmDelete()}
        >
          YES
        </Button>
      </Modal>
    </ProductProvider>
  )
}
