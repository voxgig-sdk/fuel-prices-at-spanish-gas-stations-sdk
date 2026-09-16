# FuelPricesAtSpanishGasStations SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FuelPricesAtSpanishGasStationsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FuelPricesAtSpanishGasStationsBaseFeature.new
    when "ratelimit"
      FuelPricesAtSpanishGasStationsRatelimitFeature.new
    when "retry"
      FuelPricesAtSpanishGasStationsRetryFeature.new
    when "test"
      FuelPricesAtSpanishGasStationsTestFeature.new
    when "timeout"
      FuelPricesAtSpanishGasStationsTimeoutFeature.new
    else
      FuelPricesAtSpanishGasStationsBaseFeature.new
    end
  end
end
