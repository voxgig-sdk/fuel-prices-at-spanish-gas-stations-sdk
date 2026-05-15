# FuelPricesAtSpanishGasStations Ruby SDK Reference

Complete API reference for the FuelPricesAtSpanishGasStations Ruby SDK.


## FuelPricesAtSpanishGasStationsSDK

### Constructor

```ruby
require_relative 'fuel-prices-at-spanish-gas-stations_sdk'

client = FuelPricesAtSpanishGasStationsSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FuelPricesAtSpanishGasStationsSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = FuelPricesAtSpanishGasStationsSDK.test
```


### Instance Methods

#### `Dataset(data = nil)`

Create a new `Dataset` entity instance. Pass `nil` for no initial data.

#### `Distribution(data = nil)`

Create a new `Distribution` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## DatasetEntity

```ruby
dataset = client.Dataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | ``$STRING`` | No |  |
| `distribution` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | No |  |
| `keyword` | ``$ARRAY`` | No |  |
| `modified` | ``$STRING`` | No |  |
| `publisher` | ``$OBJECT`` | No |  |
| `result` | ``$OBJECT`` | No |  |
| `theme` | ``$ARRAY`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Dataset.load({ "id" => "dataset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DistributionEntity

```ruby
distribution = client.Distribution
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | ``$OBJECT`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Distribution.load({ "id" => "distribution_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DistributionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = FuelPricesAtSpanishGasStationsSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

