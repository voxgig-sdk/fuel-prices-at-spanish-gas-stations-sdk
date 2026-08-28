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
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] modified
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] publisher
#   @return [Hash, nil]
#
# @!attribute [rw] theme
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
Dataset = Struct.new(
  :description,
  :distribution,
  :id,
  :items,
  :keyword,
  :modified,
  :page,
  :pageSize,
  :publisher,
  :theme,
  :title,
  :totalResults,
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
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] totalResults
#   @return [Integer, nil]
Distribution = Struct.new(
  :items,
  :page,
  :pageSize,
  :totalResults,
  keyword_init: true
)

# Request payload for Distribution#load.
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
DistributionLoadMatch = Struct.new(
  :format,
  :page,
  :page_size,
  :sort,
  keyword_init: true
)

