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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DistributionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FuelPricesAtSpanishGasStationsSDK.test();
        const ent = testsdk.Distribution();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'distribution.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "items", "req": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "page", "req": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "pageSize", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "totalResults", "req": false, "type": "`$INTEGER`", "index$": 3 }], "name": "distribution", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 10, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": "title", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /catalog/distribution", "json": "{\"operationId\":\"listDistributions\",\"parameters\":[{\"description\":\"Sort field\",\"in\":\"query\",\"name\":\"_sort\",\"schema\":{\"default\":\"title\",\"type\":\"string\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"_pageSize\",\"schema\":{\"default\":10,\"type\":\"integer\"}},{\"description\":\"Page number (0-indexed)\",\"in\":\"query\",\"name\":\"_page\",\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Filter by distribution format (e.g., CSV, JSON, XML)\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result\":{\"properties\":{\"items\":{\"items\":{\"properties\":{\"accessURL\":{\"description\":\"URL to access the distribution\",\"format\":\"uri\",\"type\":\"string\"},\"byteSize\":{\"description\":\"Size in bytes\",\"type\":\"integer\"},\"downloadURL\":{\"description\":\"Direct download URL\",\"format\":\"uri\",\"type\":\"string\"},\"format\":{\"description\":\"File format (CSV, JSON, XML, etc.)\",\"type\":\"string\"},\"id\":{\"description\":\"Distribution identifier\",\"type\":\"string\"},\"mediaType\":{\"description\":\"MIME type\",\"type\":\"string\"},\"title\":{\"description\":\"Distribution title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"type\":\"integer\"},\"pageSize\":{\"type\":\"integer\"},\"totalResults\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Distribution listing\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/catalog/distribution", "segments": [{ "lit": "catalog" }, { "lit": "distribution" }], "select": { "exist": ["format", "page", "page_size", "sort"] }, "transform": { "req": "`reqdata`", "res": "`body.result`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "distribution", "name__orig": "distribution", "Name": "Distribution", "name_": "distribution", "name-": "distribution", "NAME": "DISTRIBUTION", "index$": 1 }, { "active": true, "entity": "distribution", "key$": "BasicDistributionFlow", "kind": "basic", "name": "BasicDistributionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "distribution_ref01", "srcdatavar": "distribution_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-distribution_ref01" } }], "index$": 0 }] }, 'Distribution');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let distribution_ref01_data = Object.values(setup.data.existing.distribution)[0];
        // LOAD
        const distribution_ref01_ent = client.Distribution();
        const distribution_ref01_match_dt0 = {};
        const distribution_ref01_data_dt0 = (await distribution_ref01_ent.load(distribution_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != distribution_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/distribution/DistributionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FuelPricesAtSpanishGasStationsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['distribution01', 'distribution02', 'distribution03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DISTRIBUTION_ENTID': idmap,
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE': 'FALSE',
        'FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DISTRIBUTION_ENTID'];
    const live = 'TRUE' === env.FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FUEL_PRICES_AT_SPANISH_GAS_STATIONS_TEST_DISTRIBUTION_ENTID'];
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
//# sourceMappingURL=DistributionEntity.test.js.map