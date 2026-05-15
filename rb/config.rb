# FuelPricesAtSpanishGasStations SDK configuration

module FuelPricesAtSpanishGasStationsConfig
  def self.make_config
    {
      "main" => {
        "name" => "FuelPricesAtSpanishGasStations",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://datos.gob.es/apidata",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "dataset" => {},
          "distribution" => {},
        },
      },
      "entity" => {
        "dataset" => {
          "fields" => [
            {
              "name" => "description",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "distribution",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "keyword",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "modified",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "publisher",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "result",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "theme",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "title",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
          ],
          "name" => "dataset",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "keyword",
                        "orig" => "keyword",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => "title",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "theme",
                        "orig" => "theme",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/catalog/dataset",
                  "parts" => [
                    "catalog",
                    "dataset",
                  ],
                  "select" => {
                    "exist" => [
                      "keyword",
                      "page",
                      "page_size",
                      "sort",
                      "theme",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/catalog/dataset/{id}",
                  "parts" => [
                    "catalog",
                    "dataset",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 1,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "distribution" => {
          "fields" => [
            {
              "name" => "result",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 0,
            },
          ],
          "name" => "distribution",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => "title",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/catalog/distribution",
                  "parts" => [
                    "catalog",
                    "distribution",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "page",
                      "page_size",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FuelPricesAtSpanishGasStationsFeatures.make_feature(name)
  end
end
