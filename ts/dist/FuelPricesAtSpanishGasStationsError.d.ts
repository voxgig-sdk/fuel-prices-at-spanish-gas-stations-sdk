import { Context } from './Context';
declare class FuelPricesAtSpanishGasStationsError extends Error {
    isFuelPricesAtSpanishGasStationsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FuelPricesAtSpanishGasStationsError };
