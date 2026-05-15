<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FuelPricesAtSpanishGasStationsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FuelPricesAtSpanishGasStationsBaseFeature();
            case "test":
                return new FuelPricesAtSpanishGasStationsTestFeature();
            default:
                return new FuelPricesAtSpanishGasStationsBaseFeature();
        }
    }
}
