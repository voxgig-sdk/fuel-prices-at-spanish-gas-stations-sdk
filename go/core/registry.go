package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) FuelPricesAtSpanishGasStationsEntity

var NewDistributionEntityFunc func(client *FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) FuelPricesAtSpanishGasStationsEntity

