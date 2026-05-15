<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: feature_add

class FuelPricesAtSpanishGasStationsFeatureAdd
{
    public static function call(FuelPricesAtSpanishGasStationsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
