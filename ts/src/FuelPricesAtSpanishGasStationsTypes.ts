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
  keyword?: any[]
  modified?: string
  publisher?: Record<string, any>
  result?: Record<string, any>
  theme?: any[]
  title?: string
}

export interface DatasetLoadMatch {
  id: string
}

export interface Distribution {
  result?: Record<string, any>
}

export interface DistributionLoadMatch {
  result?: Record<string, any>
}

