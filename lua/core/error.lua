-- FuelPricesAtSpanishGasStations SDK error

local FuelPricesAtSpanishGasStationsError = {}
FuelPricesAtSpanishGasStationsError.__index = FuelPricesAtSpanishGasStationsError


function FuelPricesAtSpanishGasStationsError.new(code, msg, ctx)
  local self = setmetatable({}, FuelPricesAtSpanishGasStationsError)
  self.is_sdk_error = true
  self.sdk = "FuelPricesAtSpanishGasStations"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FuelPricesAtSpanishGasStationsError:error()
  return self.msg
end


function FuelPricesAtSpanishGasStationsError:__tostring()
  return self.msg
end


return FuelPricesAtSpanishGasStationsError
