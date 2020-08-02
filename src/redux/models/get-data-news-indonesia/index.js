import { action, thunk } from 'easy-peasy'
import Endpoint from '../../../const/endpoint'
import Axios from 'axios'

const DataNewsIndonesia = {
  initialState: {
    loading: true,
    error: false,
    errorMessage: null,
    items: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.items = payload
    state.initialState.loading = false
  }),

  error: action((state, payload) => {
    state.initialState.loading = true
    state.initialState.error = true
    state.initialState.errorMessage = payload
  }),

  getDataNewsIndonesia: thunk(async (actions, payload) => {
    try {
      const config = {
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/${Endpoint.API_GET_NEWS_INDONESIA}`,
        headers: {
          'Access-Control-Allow-Origin': `${Endpoint.API_GET_NEWS_INDONESIA}`,
        },
      }
      let response = await Axios(config)
      actions.fetchAction(response.data)
    } catch (error) {
      actions.error(error || error.errorMessage)
    }
  }),
}

export default DataNewsIndonesia
