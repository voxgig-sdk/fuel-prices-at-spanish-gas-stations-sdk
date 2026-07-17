-- FuelPricesAtSpanishGasStations SDK exists test

local sdk = require("fuel-prices-at-spanish-gas-stations_sdk")

describe("FuelPricesAtSpanishGasStationsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
