import { FuelPricesAtSpanishGasStationsEntityBase } from '../FuelPricesAtSpanishGasStationsEntityBase';
import type { FuelPricesAtSpanishGasStationsSDK } from '../FuelPricesAtSpanishGasStationsSDK';
import type { Control } from '../types';
import type { Distribution, DistributionLoadMatch } from '../FuelPricesAtSpanishGasStationsTypes';
declare class DistributionEntity extends FuelPricesAtSpanishGasStationsEntityBase<Distribution> {
    constructor(client: FuelPricesAtSpanishGasStationsSDK, entopts: any);
    make(this: DistributionEntity): DistributionEntity;
    load(this: any, reqmatch?: DistributionLoadMatch, ctrl?: Control): Promise<DistributionEntity>;
}
export { DistributionEntity };
