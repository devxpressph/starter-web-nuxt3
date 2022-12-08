import axios, { AxiosError, AxiosInstance } from 'axios'
import {
  ApiError,
  ApiExecutor,
  ApiExecutorArgs,
  ApiRequestConfig,
  WithAbordFn
} from './api.types'

const axiosParams = {
  baseURL: 'https://ksf.dcbet.io'
  // headers: {
  //   'X-Api-Key': process.env.apiKey || ''
  // }
}

const axiosInstance = axios.create(axiosParams)

const didAbort = (error: AxiosError) => axios.isCancel(error)

const getCancelSource = () => axios.CancelToken.source()

export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error)
}

const withAbort = <T>(fn: WithAbordFn) => {
  const executor: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig
    // Extract abort property from the config
    const { abort, ...config } = originalConfig

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource()
      config.cancelToken = token
      abort(cancel)
    }

    try {
      if (args.length > 2) {
        const [url, body] = args
        return await fn(url, body, config)
      } else {
        const [url] = args
        return await fn(url, config)
      }
    } catch (error) {
      if (!isApiError(error)) {
        throw error
      }

      // Add "aborted" property to the error if the request was cancelled
      if (didAbort(error)) {
        error.aborted = true
      } else {
        error.aborted = false
      }

      throw error
    }
  }

  return executor
}

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: async <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.get)(url, config),
    delete: <T>(url: string, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.delete)(url, config),
    post: async <T>(
      url: string,
      body: unknown,
      config: ApiRequestConfig = {}
    ) => await withAbort<T>(axios.post)(url, body, config),
    patch: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.patch)(url, body, config),
    put: <T>(url: string, body: unknown, config: ApiRequestConfig = {}) =>
      withAbort<T>(axios.put)(url, body, config)
  }
}

export default api(axiosInstance)