import { AxiosPromise, AxiosRequestConfig } from './types'
import { xhr } from './xhr'
import { buildURL } from './helpers/url'
import { transformData } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // 由于headers的处理依赖于data是普通对象，
  // 所以当执行的时候需要再data被处理之前执行
  config.headers = transformRequestHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config
  return transformData(data)
}

function transformRequestHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}


export default axios
