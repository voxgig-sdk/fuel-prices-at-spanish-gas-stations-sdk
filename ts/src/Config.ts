
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
              "parts": [
                "catalog",
                "dataset"
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
              }
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
              "parts": [
                "catalog",
                "dataset",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
              "parts": [
                "catalog",
                "distribution"
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
              }
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
  config
}

