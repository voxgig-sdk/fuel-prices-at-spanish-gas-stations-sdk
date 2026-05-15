# FuelPricesAtSpanishGasStations SDK exists test

require "minitest/autorun"
require_relative "../FuelPricesAtSpanishGasStations_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FuelPricesAtSpanishGasStationsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
