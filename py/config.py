# FuelPricesAtSpanishGasStations SDK configuration


def make_config():
    return {
        "main": {
            "name": "FuelPricesAtSpanishGasStations",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://datos.gob.es/apidata",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dataset": {},
                "distribution": {},
            },
        },
        "entity": {
      "dataset": {
        "fields": [
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "distribution",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "keyword",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "modified",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "publisher",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "result",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "theme",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
        ],
        "name": "dataset",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "keyword",
                      "orig": "keyword",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "title",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "theme",
                      "orig": "theme",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/catalog/dataset",
                "parts": [
                  "catalog",
                  "dataset",
                ],
                "select": {
                  "exist": [
                    "keyword",
                    "page",
                    "page_size",
                    "sort",
                    "theme",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/catalog/dataset/{id}",
                "parts": [
                  "catalog",
                  "dataset",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "distribution": {
        "fields": [
          {
            "name": "result",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "distribution",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "title",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/catalog/distribution",
                "parts": [
                  "catalog",
                  "distribution",
                ],
                "select": {
                  "exist": [
                    "format",
                    "page",
                    "page_size",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
