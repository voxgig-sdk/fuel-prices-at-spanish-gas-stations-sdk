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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Dataset description",
          },
          {
            "name": "distribution",
            "title": "Distribution",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Dataset identifier",
          },
          {
            "name": "items",
            "title": "Items",
            "type": "`$ARRAY`",
          },
          {
            "name": "keyword",
            "title": "Keyword",
            "type": "`$ARRAY`",
            "short": "Dataset keywords",
          },
          {
            "name": "modified",
            "title": "Modified",
            "type": "`$STRING`",
            "short": "Last modification date",
            "format": "date-time",
          },
          {
            "name": "page",
            "title": "Page",
            "type": "`$INTEGER`",
          },
          {
            "name": "pageSize",
            "title": "Page Size",
            "type": "`$INTEGER`",
          },
          {
            "name": "publisher",
            "title": "Publisher",
            "type": "`$OBJECT`",
          },
          {
            "name": "theme",
            "title": "Theme",
            "type": "`$ARRAY`",
            "short": "Dataset themes/categories",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Dataset title",
          },
          {
            "name": "totalResults",
            "title": "Total Results",
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
                "parts": [
                  "catalog",
                  "dataset",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "keyword",
                      "orig": "keyword",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "title",
                    },
                    {
                      "name": "theme",
                      "orig": "theme",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "keyword",
                    "page",
                    "page_size",
                    "sort",
                    "theme",
                  ],
                },
              },
              {
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
                "parts": [
                  "catalog",
                  "dataset",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
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
            "title": "Items",
            "type": "`$ARRAY`",
          },
          {
            "name": "page",
            "title": "Page",
            "type": "`$INTEGER`",
          },
          {
            "name": "pageSize",
            "title": "Page Size",
            "type": "`$INTEGER`",
          },
          {
            "name": "totalResults",
            "title": "Total Results",
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
                "parts": [
                  "catalog",
                  "distribution",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.result`",
                },
                "args": {
                  "query": [
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "title",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "format",
                    "page",
                    "page_size",
                    "sort",
                  ],
                },
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
