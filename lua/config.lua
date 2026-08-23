-- FuelPricesAtSpanishGasStations SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FuelPricesAtSpanishGasStations",
      slug = "fuel-prices-at-spanish-gas-stations",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://datos.gob.es/apidata",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dataset"] = {},
        ["distribution"] = {},
      },
    },
    entity = {
      ["dataset"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Dataset description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "distribution",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["short"] = "Dataset identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "keyword",
            ["short"] = "Dataset keywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "modified",
            ["short"] = "Last modification date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "page",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "pageSize",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "publisher",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "theme",
            ["short"] = "Dataset themes/categories",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["short"] = "Dataset title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "totalResults",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "dataset",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "keyword",
                      ["orig"] = "keyword",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "title",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "theme",
                      ["orig"] = "theme",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/dataset",
                ["parts"] = {
                  "catalog",
                  "dataset",
                },
                ["select"] = {
                  ["exist"] = {
                    "keyword",
                    "page",
                    "page_size",
                    "sort",
                    "theme",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/dataset/{id}",
                ["parts"] = {
                  "catalog",
                  "dataset",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["distribution"] = {
        ["fields"] = {
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "page",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "pageSize",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "totalResults",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "distribution",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "title",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalog/distribution",
                ["parts"] = {
                  "catalog",
                  "distribution",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "page",
                    "page_size",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
