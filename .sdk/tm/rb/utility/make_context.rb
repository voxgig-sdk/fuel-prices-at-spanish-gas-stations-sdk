# FuelPricesAtSpanishGasStations SDK utility: make_context
require_relative '../core/context'
module FuelPricesAtSpanishGasStationsUtilities
  MakeContext = ->(ctxmap, basectx) {
    FuelPricesAtSpanishGasStationsContext.new(ctxmap, basectx)
  }
end
