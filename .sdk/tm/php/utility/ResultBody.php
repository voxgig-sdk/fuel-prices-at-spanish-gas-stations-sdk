<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: result_body

class FuelPricesAtSpanishGasStationsResultBody
{
    public static function call(FuelPricesAtSpanishGasStationsContext $ctx): ?FuelPricesAtSpanishGasStationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
