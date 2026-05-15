<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK exists test

require_once __DIR__ . '/../fuelpricesatspanishgasstations_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FuelPricesAtSpanishGasStationsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
