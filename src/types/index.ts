export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'patch' | 'PATCH'
  | 'options' | 'OPTIONS'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
