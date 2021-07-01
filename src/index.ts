export class ExceptionError extends Error {
  code: any
  msg: any

  constructor(code: any, msg: any) {
    super(msg)
    this.code = code || 'ExceptionError'
    this.msg = msg || ''
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

interface ErrorOptions {
  code: any
  msg: any
}

type Options = string | ErrorOptions

export function error(options: Options) {
  let code = 'ExceptionError'
  let msg
  if (typeof options === 'object') {
    code = options.code
    msg = options.msg
  } else {
    msg = options
  }
  return new ExceptionError(code, msg)
}
