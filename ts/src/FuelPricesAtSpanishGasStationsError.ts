
import { Context } from './Context'


class FuelPricesAtSpanishGasStationsError extends Error {

  isFuelPricesAtSpanishGasStationsError = true

  sdk = 'FuelPricesAtSpanishGasStations'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FuelPricesAtSpanishGasStationsError
}

