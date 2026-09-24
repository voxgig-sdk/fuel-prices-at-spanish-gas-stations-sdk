"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelPricesAtSpanishGasStationsError = void 0;
class FuelPricesAtSpanishGasStationsError extends Error {
    isFuelPricesAtSpanishGasStationsError = true;
    sdk = 'FuelPricesAtSpanishGasStations';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FuelPricesAtSpanishGasStationsError = FuelPricesAtSpanishGasStationsError;
//# sourceMappingURL=FuelPricesAtSpanishGasStationsError.js.map