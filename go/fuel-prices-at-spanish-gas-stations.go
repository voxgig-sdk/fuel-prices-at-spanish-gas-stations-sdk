package voxgigfuelpricesatspanishgasstationssdk

import (
	"github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/core"
	"github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/entity"
	"github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/feature"
	_ "github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/utility"
)

// Type aliases preserve external API.
type FuelPricesAtSpanishGasStationsSDK = core.FuelPricesAtSpanishGasStationsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FuelPricesAtSpanishGasStationsEntity = core.FuelPricesAtSpanishGasStationsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FuelPricesAtSpanishGasStationsError = core.FuelPricesAtSpanishGasStationsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDatasetEntityFunc = func(client *core.FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) core.FuelPricesAtSpanishGasStationsEntity {
		return entity.NewDatasetEntity(client, entopts)
	}
	core.NewDistributionEntityFunc = func(client *core.FuelPricesAtSpanishGasStationsSDK, entopts map[string]any) core.FuelPricesAtSpanishGasStationsEntity {
		return entity.NewDistributionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFuelPricesAtSpanishGasStationsSDK = core.NewFuelPricesAtSpanishGasStationsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
