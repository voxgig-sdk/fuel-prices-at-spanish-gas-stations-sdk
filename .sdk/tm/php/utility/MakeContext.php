<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FuelPricesAtSpanishGasStationsMakeContext
{
    public static function call(array $ctxmap, ?FuelPricesAtSpanishGasStationsContext $basectx): FuelPricesAtSpanishGasStationsContext
    {
        return new FuelPricesAtSpanishGasStationsContext($ctxmap, $basectx);
    }
}
