# exception-error

A small error handling library like python exception handling that supports extensions.



## Install

```bash
npm install exception-error
yarn add exception-error
```



## Quick Start

catch error

```js
import { error, ExceptionError } from './index'

try {
  throw error({ code: 'InvalidError', msg: 'invalid error' })
} catch (e) {
  console.log(e.code)
}

try {
  throw error('error')
} catch (e) {
  console.log(e.msg)
}

try {
  throw error('error')
} catch (e) {
  console.log('e instanceof ExceptionError: ', e instanceof ExceptionError)
}
```

