

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FuelPricesAtSpanishGasStationsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FuelPricesAtSpanishGasStationsSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Dataset description","type":"`$STRING`","index$":0},{"active":true,"name":"distribution","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"id","req":false,"short":"Dataset identifier","type":"`$STRING`","index$":2},{"active":true,"name":"items","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"keyword","req":false,"short":"Dataset keywords","type":"`$ARRAY`","index$":4},{"active":true,"format":"date-time","name":"modified","req":false,"short":"Last modification date","type":"`$STRING`","index$":5},{"active":true,"name":"page","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"pageSize","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"publisher","req":false,"type":"`$OBJECT`","index$":8},{"active":true,"name":"theme","req":false,"short":"Dataset themes/categories","type":"`$ARRAY`","index$":9},{"active":true,"name":"title","req":false,"short":"Dataset title","type":"`$STRING`","index$":10},{"active":true,"name":"totalResults","req":false,"type":"`$INTEGER`","index$":11}],"id":{"field":"id","name":"id"},"name":"dataset","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"keyword","orig":"keyword","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":0,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":10,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"title","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"theme","orig":"theme","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /catalog/dataset","json":"{\"operationId\":\"listDatasets\",\"parameters\":[{\"description\":\"Sort field (e.g., title, modified)\",\"in\":\"query\",\"name\":\"_sort\",\"schema\":{\"default\":\"title\",\"type\":\"string\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"_pageSize\",\"schema\":{\"default\":10,\"type\":\"integer\"}},{\"description\":\"Page number (0-indexed)\",\"in\":\"query\",\"name\":\"_page\",\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Filter by theme (e.g., energia for energy/fuel datasets)\",\"in\":\"query\",\"name\":\"theme\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by keyword\",\"in\":\"query\",\"name\":\"keyword\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Dataset description\",\"type\":\"string\"},\"distribution\":{\"items\":{\"properties\":{\"accessURL\":{\"description\":\"URL to access the distribution\",\"format\":\"uri\",\"type\":\"string\"},\"byteSize\":{\"description\":\"Size in bytes\",\"type\":\"integer\"},\"downloadURL\":{\"description\":\"Direct download URL\",\"format\":\"uri\",\"type\":\"string\"},\"format\":{\"description\":\"File format (CSV, JSON, XML, etc.)\",\"type\":\"string\"},\"id\":{\"description\":\"Distribution identifier\",\"type\":\"string\"},\"mediaType\":{\"description\":\"MIME type\",\"type\":\"string\"},\"title\":{\"description\":\"Distribution title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"keyword\":{\"description\":\"Dataset keywords\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"modified\":{\"description\":\"Last modification date\",\"format\":\"date-time\",\"type\":\"string\"},\"publisher\":{\"properties\":{\"mbox\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"theme\":{\"description\":\"Dataset themes/categories\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Dataset title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"type\":\"integer\"},\"pageSize\":{\"type\":\"integer\"},\"totalResults\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Dataset listing\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/catalog/dataset","segments":[{"lit":"catalog"},{"lit":"dataset"}],"select":{"exist":["keyword","page","page_size","sort","theme"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /catalog/dataset/{id}","json":"{\"operationId\":\"getDataset\",\"parameters\":[{\"description\":\"The dataset identifier\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Dataset description\",\"type\":\"string\"},\"distribution\":{\"items\":{\"properties\":{\"accessURL\":{\"description\":\"URL to access the distribution\",\"format\":\"uri\",\"type\":\"string\"},\"byteSize\":{\"description\":\"Size in bytes\",\"type\":\"integer\"},\"downloadURL\":{\"description\":\"Direct download URL\",\"format\":\"uri\",\"type\":\"string\"},\"format\":{\"description\":\"File format (CSV, JSON, XML, etc.)\",\"type\":\"string\"},\"id\":{\"description\":\"Distribution identifier\",\"type\":\"string\"},\"mediaType\":{\"description\":\"MIME type\",\"type\":\"string\"},\"title\":{\"description\":\"Distribution title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"keyword\":{\"description\":\"Dataset keywords\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"modified\":{\"description\":\"Last modification date\",\"format\":\"date-time\",\"type\":\"string\"},\"publisher\":{\"properties\":{\"mbox\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"theme\":{\"description\":\"Dataset themes/categories\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Dataset title\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Dataset details\"},\"404\":{\"description\":\"Dataset not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/catalog/dataset/{id}","segments":[{"lit":"catalog"},{"lit":"dataset"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"match":{"id":"dataset01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":0}]}, 'Dataset')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0] as any

    // LOAD
    const dataset_ref01_ent = client.Dataset()
    const dataset_ref01_match_dt0: any = {}
    dataset_ref01_match_dt0.id = dataset_ref01_data.id
    const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data()
    assert(dataset_ref01_data_dt0.id === dataset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dataset/DatasetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FuelPricesAtSpanishGasStationsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['dataset01','dataset02','dataset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID': idmap,
    'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE': 'FALSE',
    'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID']

  const live = 'TRUE' === env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FuelPricesAtSpanishGasStationsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
