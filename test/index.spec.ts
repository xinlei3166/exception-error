import { error, ExceptionError } from '../src'

describe('Exception', () => {
  test('error.code', () => {
    try {
      throw error({ code: 'InvalidError', msg: 'invalid error' })
    } catch (e) {
      expect(e.code).toBe('InvalidError')
    }
  })

  test('error.msg', () => {
    try {
      throw error('error')
    } catch (e) {
      expect(e.msg).toBe('error')
    }
  })

  test('exception', () => {
    expect(() => {
      throw error('error')
    }).toThrow(ExceptionError)
  })
})
