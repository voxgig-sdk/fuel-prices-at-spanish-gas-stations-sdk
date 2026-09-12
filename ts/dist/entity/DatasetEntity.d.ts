import { FuelPricesAtSpanishGasStationsEntityBase } from '../FuelPricesAtSpanishGasStationsEntityBase';
import type { FuelPricesAtSpanishGasStationsSDK } from '../FuelPricesAtSpanishGasStationsSDK';
import type { Control } from '../types';
import type { Dataset, DatasetLoadMatch } from '../FuelPricesAtSpanishGasStationsTypes';
declare class DatasetEntity extends FuelPricesAtSpanishGasStationsEntityBase<Dataset> {
    constructor(client: FuelPricesAtSpanishGasStationsSDK, entopts: any);
    make(this: DatasetEntity): DatasetEntity;
    load(this: any, reqmatch?: DatasetLoadMatch, ctrl?: Control): Promise<DatasetEntity>;
}
export { DatasetEntity };
