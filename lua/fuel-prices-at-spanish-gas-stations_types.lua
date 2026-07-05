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
---@field keyword? table
---@field modified? string
---@field publisher? table
---@field result? table
---@field theme? table
---@field title? string

---@class DatasetLoadMatch
---@field id string

---@class Distribution
---@field result? table

---@class DistributionLoadMatch
---@field result? table

local M = {}

return M
