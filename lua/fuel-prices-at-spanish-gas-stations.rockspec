package = "voxgig-sdk-fuel-prices-at-spanish-gas-stations"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk.git"
}
description = {
  summary = "FuelPricesAtSpanishGasStations SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fuel-prices-at-spanish-gas-stations_sdk"] = "fuel-prices-at-spanish-gas-stations_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
