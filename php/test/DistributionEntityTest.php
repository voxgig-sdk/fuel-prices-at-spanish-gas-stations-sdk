<?php
declare(strict_types=1);

// Distribution entity test

require_once __DIR__ . '/../fuelpricesatspanishgasstations_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DistributionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = FuelPricesAtSpanishGasStationsSDK::test(null, null);
        $ent = $testsdk->Distribution(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = distribution_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "distribution." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $distribution_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.distribution")));
        $distribution_ref01_data = null;
        if (count($distribution_ref01_data_raw) > 0) {
            $distribution_ref01_data = Helpers::to_map($distribution_ref01_data_raw[0][1]);
        }

        // LOAD
        $distribution_ref01_ent = $client->Distribution(null);
        $distribution_ref01_match_dt0 = [];
        [$distribution_ref01_data_dt0_loaded, $err] = $distribution_ref01_ent->load($distribution_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($distribution_ref01_data_dt0_loaded);

    }
}

function distribution_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/distribution/DistributionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = FuelPricesAtSpanishGasStationsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["distribution01", "distribution02", "distribution03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID" => $idmap,
        "FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE" => "FALSE",
        "FUELPRICESATSPANISHGASSTATIONS_TEST_EXPLAIN" => "FALSE",
        "FUELPRICESATSPANISHGASSTATIONS_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["FUELPRICESATSPANISHGASSTATIONS_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new FuelPricesAtSpanishGasStationsSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["FUELPRICESATSPANISHGASSTATIONS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
