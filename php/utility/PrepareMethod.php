<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: prepare_method

class FuelPricesAtSpanishGasStationsPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(FuelPricesAtSpanishGasStationsContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
