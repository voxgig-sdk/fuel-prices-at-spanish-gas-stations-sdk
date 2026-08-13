-- Typed models for the FuelPricesAtSpanishGasStations SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dataset
---@field description? string
---@field distribution? table
---@field id? string
---@field items? table
---@field keyword? table
---@field modified? string
---@field page? number
---@field pageSize? number
---@field publisher? table
---@field theme? table
---@field title? string
---@field totalResults? number

---@class DatasetLoadMatch
---@field id? string

---@class Distribution
---@field items? table
---@field page? number
---@field pageSize? number
---@field totalResults? number

---@class DistributionLoadMatch
---@field items? table
---@field page? number
---@field pageSize? number
---@field totalResults? number

local M = {}

return M
