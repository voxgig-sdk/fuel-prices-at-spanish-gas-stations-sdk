// Typed models for the FuelPricesAtSpanishGasStations SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Dataset is the typed data model for the dataset entity.
type Dataset struct {
	Description *string `json:"description,omitempty"`
	Distribution *[]any `json:"distribution,omitempty"`
	Id *string `json:"id,omitempty"`
	Keyword *[]any `json:"keyword,omitempty"`
	Modified *string `json:"modified,omitempty"`
	Publisher *map[string]any `json:"publisher,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Theme *[]any `json:"theme,omitempty"`
	Title *string `json:"title,omitempty"`
}

// DatasetLoadMatch is the typed request payload for Dataset.LoadTyped.
type DatasetLoadMatch struct {
	Id string `json:"id"`
}

// Distribution is the typed data model for the distribution entity.
type Distribution struct {
	Result *map[string]any `json:"result,omitempty"`
}

// DistributionLoadMatch mirrors the distribution fields as an all-optional match
// filter (Go analog of Partial<Distribution>).
type DistributionLoadMatch struct {
	Result *map[string]any `json:"result,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
