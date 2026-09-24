"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DatasetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FuelPricesAtSpanishGasStationsSDK.test();
        const ent = testsdk.Dataset();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dataset.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Dataset description", "t": "`$STRING`", "key$": "description", "index$": 0 }, "distribution": { "a": true, "h": "Distribution", "n": "distribution", "r": false, "t": "`$ARRAY`", "key$": "distribution", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Dataset identifier", "t": "`$STRING`", "key$": "id", "index$": 2 }, "items": { "a": true, "h": "Items", "n": "items", "r": false, "t": "`$ARRAY`", "key$": "items", "index$": 3 }, "keyword": { "a": true, "h": "Keyword", "n": "keyword", "r": false, "sh": "Dataset keywords", "t": "`$ARRAY`", "key$": "keyword", "index$": 4 }, "modified": { "a": true, "fo": "date-time", "h": "Modified", "n": "modified", "r": false, "sh": "Last modification date", "t": "`$STRING`", "key$": "modified", "index$": 5 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "t": "`$INTEGER`", "key$": "page", "index$": 6 }, "pageSize": { "a": true, "h": "Page Size", "n": "pageSize", "r": false, "t": "`$INTEGER`", "key$": "pageSize", "index$": 7 }, "publisher": { "a": true, "h": "Publisher", "n": "publisher", "r": false, "t": "`$OBJECT`", "key$": "publisher", "index$": 8 }, "theme": { "a": true, "h": "Theme", "n": "theme", "r": false, "sh": "Dataset themes/categories", "t": "`$ARRAY`", "key$": "theme", "index$": 9 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Dataset title", "t": "`$STRING`", "key$": "title", "index$": 10 }, "totalResults": { "a": true, "h": "Total Results", "n": "totalResults", "r": false, "t": "`$INTEGER`", "key$": "totalResults", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "dataset", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /catalog/dataset", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "keyword", "or": "keyword", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 10, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "title", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "theme", "or": "theme", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/catalog/dataset", "q": { "exist": ["keyword", "page", "page_size", "sort", "theme"] }, "r": {}, "s": [{ "lit": "catalog" }, { "lit": "dataset" }], "t": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /catalog/dataset/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/catalog/dataset/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "catalog" }, { "lit": "dataset" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dataset", "name__orig": "dataset", "Name": "Dataset", "name_": "dataset", "name-": "dataset", "NAME": "DATASET", "index$": 0 }, { "active": true, "entity": "dataset", "key$": "BasicDatasetFlow", "kind": "basic", "name": "BasicDatasetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dataset_ref01", "srcdatavar": "dataset_ref01_data", "suffix": "_dt0" }, "m": { "id": "dataset01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dataset_ref01" } }], "index$": 0 }] }, 'Dataset', { "GET /catalog/dataset": { "protocol": "http", "operationId": "listDatasets", "responses": { "200": { "description": "Dataset listing", "content": { "application/json": { "schema": { "type": "object", "properties": { "result": { "key$": "result", "properties": { "items": { "items": { "properties": { "description": { "description": "Dataset description", "type": "string" }, "distribution": { "items": { "properties": { "accessURL": { "description": "URL to access the distribution", "format": "uri", "type": "string" }, "byteSize": { "description": "Size in bytes", "type": "integer" }, "downloadURL": { "description": "Direct download URL", "format": "uri", "type": "string" }, "format": { "description": "File format (CSV, JSON, XML, etc.)", "type": "string" }, "id": { "description": "Distribution identifier", "type": "string" }, "mediaType": { "description": "MIME type", "type": "string" }, "title": { "description": "Distribution title", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Distribution" }, "type": "array" }, "id": { "description": "Dataset identifier", "type": "string" }, "keyword": { "description": "Dataset keywords", "items": { "type": "string" }, "type": "array" }, "modified": { "description": "Last modification date", "format": "date-time", "type": "string" }, "publisher": { "properties": { "mbox": { "type": "string" }, "name": { "type": "string" } }, "type": "object" }, "theme": { "description": "Dataset themes/categories", "items": { "type": "string" }, "type": "array" }, "title": { "description": "Dataset title", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Dataset" }, "type": "array", "key$": "items" }, "page": { "type": "integer", "key$": "page" }, "pageSize": { "type": "integer", "key$": "pageSize" }, "totalResults": { "type": "integer", "key$": "totalResults" } }, "type": "object", "index$": 0 } }, "x-ref": "#/components/schemas/DatasetListResponse" } } } } }, "parameters": [{ "name": "_sort", "in": "query", "description": "Sort field (e.g., title, modified)", "schema": { "type": "string", "default": "title" }, "index$": 0 }, { "name": "_pageSize", "in": "query", "description": "Number of results per page", "schema": { "type": "integer", "default": 10 }, "index$": 1 }, { "name": "_page", "in": "query", "description": "Page number (0-indexed)", "schema": { "type": "integer", "default": 0 }, "index$": 2 }, { "name": "theme", "in": "query", "description": "Filter by theme (e.g., energia for energy/fuel datasets)", "schema": { "type": "string" }, "index$": 3 }, { "name": "keyword", "in": "query", "description": "Filter by keyword", "schema": { "type": "string" }, "index$": 4 }], "securitySource": "unspecified" }, "GET /catalog/dataset/{id}": { "protocol": "http", "operationId": "getDataset", "responses": { "200": { "description": "Dataset details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Dataset identifier", "type": "string", "key$": "id" }, "title": { "description": "Dataset title", "type": "string", "key$": "title" }, "description": { "description": "Dataset description", "type": "string", "key$": "description" }, "theme": { "description": "Dataset themes/categories", "items": { "type": "string" }, "type": "array", "key$": "theme" }, "keyword": { "description": "Dataset keywords", "items": { "type": "string" }, "type": "array", "key$": "keyword" }, "modified": { "description": "Last modification date", "format": "date-time", "type": "string", "key$": "modified" }, "publisher": { "properties": { "mbox": { "type": "string" }, "name": { "type": "string" } }, "type": "object", "key$": "publisher" }, "distribution": { "items": { "properties": { "accessURL": { "description": "URL to access the distribution", "format": "uri", "type": "string" }, "byteSize": { "description": "Size in bytes", "type": "integer" }, "downloadURL": { "description": "Direct download URL", "format": "uri", "type": "string" }, "format": { "description": "File format (CSV, JSON, XML, etc.)", "type": "string" }, "id": { "description": "Distribution identifier", "type": "string" }, "mediaType": { "description": "MIME type", "type": "string" }, "title": { "description": "Distribution title", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Distribution" }, "type": "array", "key$": "distribution" } }, "x-ref": "#/components/schemas/Dataset", "index$": 0 } } } }, "404": { "description": "Dataset not found" } }, "parameters": [{ "name": "id", "in": "path", "required": true, "description": "The dataset identifier", "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0];
        // LOAD
        const dataset_ref01_ent = client.Dataset();
        const dataset_ref01_match_dt0 = {};
        dataset_ref01_match_dt0.id = dataset_ref01_data.id;
        const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dataset_ref01_data_dt0.id === dataset_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dataset/DatasetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FuelPricesAtSpanishGasStationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dataset01', 'dataset02', 'dataset03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID': idmap,
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE': 'FALSE',
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID'];
    const live = 'TRUE' === env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DATASET_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FuelPricesAtSpanishGasStationsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=DatasetEntity.test.js.map