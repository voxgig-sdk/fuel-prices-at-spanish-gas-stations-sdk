<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility: result_headers

class FuelPricesAtSpanishGasStationsResultHeaders
{
    public static function call(FuelPricesAtSpanishGasStationsContext $ctx): ?FuelPricesAtSpanishGasStationsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
