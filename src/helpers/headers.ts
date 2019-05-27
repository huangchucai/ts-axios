import { isPlainObject } from './util'

function normalizeHeadername(headers: any, normalizeName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(key => {
    if (key !== normalizeName && key.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[key]
      console.log(headers)
      delete headers[key]
    }
  })

}

export function processHeaders(headers: any, data: any): any {
  normalizeHeadername(headers, 'Content-Type')
  if (isPlainObject(data)) {
    // headers 存在的时候 默认添加content-type
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
