# FuelPricesAtSpanishGasStations SDK

Query Spain's open data catalogue for fuel-price datasets and distributions from datos.gob.es

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fuel Prices at Spanish Gas Stations API

This SDK wraps the [datos.gob.es](https://datos.gob.es/en/apidata) APIdata service, the query interface to Spain's national open-data catalogue run by the Secretaría General de Administración Digital. It is used here to locate fuel-price datasets published by Spanish public bodies (notably the Ministerio para la Transición Ecológica / Ministerio de Industria) and the distributions (CSV, XML, JSON, etc.) that carry the actual gas-station price records.

What you get from the API:

- Catalogue queries over `dataset` resources, filterable by publisher, theme, keyword, and geographic coverage.
- `distribution` resources describing each downloadable file for a dataset, including format and access URL.
- URIs aligned with the Spanish NTI (Norma Técnica de Interoperabilidad) and DCAT-AP vocabulary.
- A SPARQL endpoint for direct semantic queries against the same catalogue.

The API is read-only and does not require authentication. Fuel-price records themselves live in the distribution files linked from each dataset rather than as inline fields in the catalogue response.

## Try it

**TypeScript**
```bash
npm install fuel-prices-at-spanish-gas-stations
```

**Python**
```bash
pip install fuel-prices-at-spanish-gas-stations-sdk
```

**PHP**
```bash
composer require voxgig/fuel-prices-at-spanish-gas-stations-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/go
```

**Ruby**
```bash
gem install fuel-prices-at-spanish-gas-stations-sdk
```

**Lua**
```bash
luarocks install fuel-prices-at-spanish-gas-stations-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FuelPricesAtSpanishGasStationsSDK } from 'fuel-prices-at-spanish-gas-stations'

const client = new FuelPricesAtSpanishGasStationsSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fuel-prices-at-spanish-gas-stations-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fuel-prices-at-spanish-gas-stations": {
      "command": "/abs/path/to/fuel-prices-at-spanish-gas-stations-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Dataset** | A catalogue entry describing a published dataset (publisher, theme, keywords, coverage); queried under `/catalog/dataset`. | `/catalog/dataset` |
| **Distribution** | A concrete downloadable representation of a dataset (format and access URL) attached to a `dataset` entry. | `/catalog/distribution` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fuelpricesatspanishgasstations_sdk import FuelPricesAtSpanishGasStationsSDK

client = FuelPricesAtSpanishGasStationsSDK({})


# Load a specific dataset
dataset, err = client.Dataset(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'fuelpricesatspanishgasstations_sdk.php';

$client = new FuelPricesAtSpanishGasStationsSDK([]);


// Load a specific dataset
[$dataset, $err] = $client->Dataset(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/go"

client := sdk.NewFuelPricesAtSpanishGasStationsSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "FuelPricesAtSpanishGasStations_sdk"

client = FuelPricesAtSpanishGasStationsSDK.new({})


# Load a specific dataset
dataset, err = client.Dataset(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("fuel-prices-at-spanish-gas-stations_sdk")

local client = sdk.new({})


-- Load a specific dataset
local dataset, err = client:Dataset(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FuelPricesAtSpanishGasStationsSDK.test()
const result = await client.Dataset().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FuelPricesAtSpanishGasStationsSDK.test(None, None)
result, err = client.Dataset(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FuelPricesAtSpanishGasStationsSDK::test(null, null);
[$result, $err] = $client->Dataset(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Dataset(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FuelPricesAtSpanishGasStationsSDK.test(nil, nil)
result, err = client.Dataset(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Dataset(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Fuel Prices at Spanish Gas Stations API

- Upstream: [https://datos.gob.es/en/apidata](https://datos.gob.es/en/apidata)

- Data and metadata are published by the Spanish government under public sector information reuse rules (Ley 37/2007 / Real Decreto 1495/2011).
- Attribution to the source dataset publisher is generally required; check each dataset's own licence field.
- The catalogue itself is operated by datos.gob.es; consult the [legal notice](https://datos.gob.es/) for the authoritative terms.

---

Generated from the Fuel Prices at Spanish Gas Stations API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
