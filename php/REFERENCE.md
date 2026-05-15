# FuelPricesAtSpanishGasStations PHP SDK Reference

Complete API reference for the FuelPricesAtSpanishGasStations PHP SDK.


## FuelPricesAtSpanishGasStationsSDK

### Constructor

```php
require_once __DIR__ . '/fuel-prices-at-spanish-gas-stations_sdk.php';

$client = new FuelPricesAtSpanishGasStationsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FuelPricesAtSpanishGasStationsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = FuelPricesAtSpanishGasStationsSDK::test();
```


### Instance Methods

#### `Dataset($data = null)`

Create a new `DatasetEntity` instance. Pass `null` for no initial data.

#### `Distribution($data = null)`

Create a new `DistributionEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## DatasetEntity

```php
$dataset = $client->Dataset();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Dataset()->load(["id" => "dataset_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DatasetEntity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DistributionEntity

```php
$distribution = $client->Distribution();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | ``$OBJECT`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Distribution()->load(["id" => "distribution_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DistributionEntity`

Create a new `DistributionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new FuelPricesAtSpanishGasStationsSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

