package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) FuelPricesAtSpanishGasStationsEntity

var NewDistributionEntityFunc func(client *FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) FuelPricesAtSpanishGasStationsEntity

