<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: prepare_body

class FuelPricesAtSpanishGasStationsPrepareBody
{
    public static function call(FuelPricesAtSpanishGasStationsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
