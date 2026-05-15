# FuelPricesAtSpanishGasStations SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FuelPricesAtSpanishGasStationsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FuelPricesAtSpanishGasStationsBaseFeature.new
    when "test"
      FuelPricesAtSpanishGasStationsTestFeature.new
    else
      FuelPricesAtSpanishGasStationsBaseFeature.new
    end
  end
end
