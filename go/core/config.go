package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FuelPricesAtSpanishGasStations",
			"slug": "fuel-prices-at-spanish-gas-stations",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://datos.gob.es/apidata",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dataset": map[string]any{},
				"distribution": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Dataset description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "distribution",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Dataset identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "keyword",
						"short": "Dataset keywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "modified",
						"short": "Last modification date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "publisher",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "theme",
						"short": "Dataset themes/categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"short": "Dataset title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalResults",
						"type": "`$INTEGER`",
					},
				},
				"name": "dataset",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "keyword",
											"orig": "keyword",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "title",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "theme",
											"orig": "theme",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/dataset",
								"parts": []any{
									"catalog",
									"dataset",
								},
								"select": map[string]any{
									"exist": []any{
										"keyword",
										"page",
										"page_size",
										"sort",
										"theme",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/dataset/{id}",
								"parts": []any{
									"catalog",
									"dataset",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"distribution": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "page",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pageSize",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "totalResults",
						"type": "`$INTEGER`",
					},
				},
				"name": "distribution",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "title",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalog/distribution",
								"parts": []any{
									"catalog",
									"distribution",
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"page",
										"page_size",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
