import { create } from 'apisauce'

const baseURL = process.env.API_BASE_URL || 'http://localhost:3000'

const STATUS_CODES = {
  unauthorized: 401
}

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000
})

// If you need to add more monitors consider calling api.addMonitor from your component
export const apiSetup = () => {
  api.addMonitor((response) => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was assigned for the response.
       * - i.e: unauthorizedCallback?.(response)
       * - i.e: networkErrorCallback?.(response)
       */
    }
  })

  api.addMonitor((response) => {
    if (response.problem === 'NETWORK_ERROR') {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - i.e: networkErrorCallback?.(response)
       */
    }
  })
}

export default api
