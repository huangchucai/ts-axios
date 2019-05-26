import { AxiosRequestConfig } from './types'

export function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, params } = config
  const request = new XMLHttpRequest()
  request.open(method.toLocaleUpperCase(), url, true)
  request.send(params)
}
