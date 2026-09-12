# FuelPricesAtSpanishGasStations SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FuelPricesAtSpanishGasStations",
            "slug": "fuel-prices-at-spanish-gas-stations",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://datos.gob.es/apidata",
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
            "short": "Dataset description",
            "type": "`$STRING`",
          },
          {
            "name": "distribution",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Dataset identifier",
            "type": "`$STRING`",
          },
          {
            "name": "items",
            "type": "`$ARRAY`",
          },
          {
            "name": "keyword",
            "short": "Dataset keywords",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "modified",
            "short": "Last modification date",
            "type": "`$STRING`",
          },
          {
            "name": "page",
            "type": "`$INTEGER`",
          },
          {
            "name": "pageSize",
            "type": "`$INTEGER`",
          },
          {
            "name": "publisher",
            "type": "`$OBJECT`",
          },
          {
            "name": "theme",
            "short": "Dataset themes/categories",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "short": "Dataset title",
            "type": "`$STRING`",
          },
          {
            "name": "totalResults",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "title",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "theme",
                      "orig": "theme",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/dataset",
                "segments": [
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "dataset",
                  },
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
                  "res": "`body.result`",
                },
                "parts": [
                  "catalog",
                  "dataset",
                ],
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
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/dataset/{id}",
                "segments": [
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "dataset",
                  },
                  {
                    "var": "id",
                  },
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
                "parts": [
                  "catalog",
                  "dataset",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "distribution": {
        "fields": [
          {
            "name": "items",
            "type": "`$ARRAY`",
          },
          {
            "name": "page",
            "type": "`$INTEGER`",
          },
          {
            "name": "pageSize",
            "type": "`$INTEGER`",
          },
          {
            "name": "totalResults",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "title",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/catalog/distribution",
                "segments": [
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "distribution",
                  },
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
                  "res": "`body.result`",
                },
                "parts": [
                  "catalog",
                  "distribution",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
