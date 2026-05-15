<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK base feature

class FuelPricesAtSpanishGasStationsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FuelPricesAtSpanishGasStationsContext $ctx, array $options): void {}
    public function PostConstruct(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PostConstructEntity(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function SetData(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function GetData(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function GetMatch(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function SetMatch(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PrePoint(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreSpec(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreRequest(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreResponse(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreResult(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreDone(FuelPricesAtSpanishGasStationsContext $ctx): void {}
    public function PreUnexpected(FuelPricesAtSpanishGasStationsContext $ctx): void {}
}
