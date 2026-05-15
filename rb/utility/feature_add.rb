# FuelPricesAtSpanishGasStations SDK utility: feature_add
module FuelPricesAtSpanishGasStationsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
