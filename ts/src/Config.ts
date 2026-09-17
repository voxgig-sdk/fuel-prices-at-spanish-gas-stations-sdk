
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FuelPricesAtSpanishGasStations',
        slug: "fuel-prices-at-spanish-gas-stations",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
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
 retry:     {
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
 test:     {
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
 timeout:     {
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

  }


  options = {
    base: "https://datos.gob.es/apidata",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        dataset: {
        },
  
        distribution: {
        },
  
    }
  }


  entity = {
    "dataset": {
      "fields": [
        {
          "name": "description",
          "short": "Dataset description",
          "type": "`$STRING`"
        },
        {
          "name": "distribution",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Dataset identifier",
          "type": "`$STRING`"
        },
        {
          "name": "items",
          "type": "`$ARRAY`"
        },
        {
          "name": "keyword",
          "short": "Dataset keywords",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "modified",
          "short": "Last modification date",
          "type": "`$STRING`"
        },
        {
          "name": "page",
          "type": "`$INTEGER`"
        },
        {
          "name": "pageSize",
          "type": "`$INTEGER`"
        },
        {
          "name": "publisher",
          "type": "`$OBJECT`"
        },
        {
          "name": "theme",
          "short": "Dataset themes/categories",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Dataset title",
          "type": "`$STRING`"
        },
        {
          "name": "totalResults",
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "keyword",
                    "orig": "keyword",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "title",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "theme",
                    "orig": "theme",
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "keyword",
                  "page",
                  "page_size",
                  "sort",
                  "theme"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "parts": [
                "catalog",
                "dataset"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "catalog",
                "dataset",
                "{id}"
              ]
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
          "type": "`$ARRAY`"
        },
        {
          "name": "page",
          "type": "`$INTEGER`"
        },
        {
          "name": "pageSize",
          "type": "`$INTEGER`"
        },
        {
          "name": "totalResults",
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "title",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "format",
                  "page",
                  "page_size",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "parts": [
                "catalog",
                "distribution"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

