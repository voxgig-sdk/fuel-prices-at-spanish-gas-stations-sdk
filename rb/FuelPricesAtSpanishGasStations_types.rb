# frozen_string_literal: true

# Typed models for the FuelPricesAtSpanishGasStations SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dataset entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] modified
#   @return [String, nil]
#
# @!attribute [rw] publisher
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] theme
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Dataset = Struct.new(
  :description,
  :distribution,
  :id,
  :keyword,
  :modified,
  :publisher,
  :result,
  :theme,
  :title,
  keyword_init: true
)

# Request payload for Dataset#load.
#
# @!attribute [rw] id
#   @return [String]
DatasetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Distribution entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
Distribution = Struct.new(
  :result,
  keyword_init: true
)

# Match filter for Distribution#load (any subset of Distribution fields).
#
# @!attribute [rw] result
#   @return [Hash, nil]
DistributionLoadMatch = Struct.new(
  :result,
  keyword_init: true
)

