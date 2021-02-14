import Axios from 'axios'

const urlApi = 'http://localhost:6100'

export const GetProducts = async () => {
  try {
    const { data } = await Axios({
      method: 'GET',
      url: `${urlApi}/products`,
    })
    return data && data.data
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const GetProductById = async (id) => {
  try {
    const { data } = await Axios({
      method: 'GET',
      url: `${urlApi}/product/${id}`,
    })
    return data && data.data
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const DeleteProduct = async (id) => {
  try {
    const { data } = await Axios({
      method: 'DELETE',
      url: `${urlApi}/product/delete/${id}`,
    })
    return data
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const EditProduct = async (id, params) => {
  try {
    const { data } = await Axios({
      method: 'PATCH',
      url: `${urlApi}/product/${id}`,
      data: params,
    })
    return data
  } catch (error) {
    console.log('err ===>', error)
  }
}

export const PostLogin = async (params) => {
  try {
    const { data } = await Axios({
      method: 'POST',
      url: `${urlApi}/login`,
      data: params,
    })
    return data
  } catch (error) {
    console.log('err ===>', error)
  }
}
