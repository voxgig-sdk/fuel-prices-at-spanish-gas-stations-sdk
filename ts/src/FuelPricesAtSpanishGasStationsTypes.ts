// Typed models for the FuelPricesAtSpanishGasStations SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  description?: string
  distribution?: any[]
  id?: string
  items?: any[]
  keyword?: any[]
  modified?: string
  page?: number
  pageSize?: number
  publisher?: Record<string, any>
  theme?: any[]
  title?: string
  totalResults?: number
}

export interface DatasetLoadMatch {
  id: string
}

export interface Distribution {
  items?: any[]
  page?: number
  pageSize?: number
  totalResults?: number
}

export interface DistributionLoadMatch {
  items?: any[]
  page?: number
  pageSize?: number
  totalResults?: number
}

