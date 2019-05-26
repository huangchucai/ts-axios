export function isDate(param: any): param is Date {
  return Object.prototype.toString.call(param) === '[object Date]';
}

export function isPlainObject(param: any): param is Object {
  return param !== null && typeof param === 'object';
}
