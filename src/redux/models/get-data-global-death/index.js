import { action, thunk } from 'easy-peasy'
import Endpoint from '../../../const/endpoint'
import Axios from 'axios'

const DataGlobalDeath = {
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

  getDataGlobalDeath: thunk(async (actions, payload) => {
    try {
      const config = {
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/${Endpoint.AP_GET_GLOBAL_DEATH}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      let response = await Axios(config)
      actions.fetchAction(response.data)
    } catch (error) {
      actions.error(error || error.errorMessage)
    }
  }),
}

export default DataGlobalDeath
