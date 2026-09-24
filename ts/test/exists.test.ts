
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FuelPricesAtSpanishGasStationsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FuelPricesAtSpanishGasStationsSDK.test()
    equal(testsdk instanceof FuelPricesAtSpanishGasStationsSDK, true,
      'FuelPricesAtSpanishGasStationsSDK.test() must return a client synchronously')
  })

})
