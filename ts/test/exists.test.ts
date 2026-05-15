
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FuelPricesAtSpanishGasStationsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FuelPricesAtSpanishGasStationsSDK.test()
    equal(null !== testsdk, true)
  })

})
