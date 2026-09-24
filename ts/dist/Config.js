"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FuelPricesAtSpanishGasStations',
        slug: "fuel-prices-at-spanish-gas-stations",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://datos.gob.es/apidata",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            dataset: {},
            distribution: {},
        }
    };
    entity = {
        "dataset": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Dataset description"
                },
                {
                    "name": "distribution",
                    "title": "Distribution",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Dataset identifier"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "keyword",
                    "title": "Keyword",
                    "type": "`$ARRAY`",
                    "short": "Dataset keywords"
                },
                {
                    "name": "modified",
                    "title": "Modified",
                    "type": "`$STRING`",
                    "short": "Last modification date",
                    "format": "date-time"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "title": "Page Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "publisher",
                    "title": "Publisher",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "theme",
                    "title": "Theme",
                    "type": "`$ARRAY`",
                    "short": "Dataset themes/categories"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Dataset title"
                },
                {
                    "name": "totalResults",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "dataset",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/catalog/dataset",
                            "segments": [
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "dataset"
                                }
                            ],
                            "parts": [
                                "catalog",
                                "dataset"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "keyword",
                                        "orig": "keyword",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "title"
                                    },
                                    {
                                        "name": "theme",
                                        "orig": "theme",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "keyword",
                                    "page",
                                    "page_size",
                                    "sort",
                                    "theme"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/catalog/dataset/{id}",
                            "segments": [
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "dataset"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "catalog",
                                "dataset",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "distribution": {
            "fields": [
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pageSize",
                    "title": "Page Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "totalResults",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "distribution",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/catalog/distribution",
                            "segments": [
                                {
                                    "lit": "catalog"
                                },
                                {
                                    "lit": "distribution"
                                }
                            ],
                            "parts": [
                                "catalog",
                                "distribution"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "title"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "format",
                                    "page",
                                    "page_size",
                                    "sort"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map