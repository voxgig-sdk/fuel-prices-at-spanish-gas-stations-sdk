# FuelPricesAtSpanishGasStations SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FuelPricesAtSpanishGasStationsUtility.registrar = ->(u) {
  u.clean = FuelPricesAtSpanishGasStationsUtilities::Clean
  u.done = FuelPricesAtSpanishGasStationsUtilities::Done
  u.make_error = FuelPricesAtSpanishGasStationsUtilities::MakeError
  u.feature_add = FuelPricesAtSpanishGasStationsUtilities::FeatureAdd
  u.feature_hook = FuelPricesAtSpanishGasStationsUtilities::FeatureHook
  u.feature_init = FuelPricesAtSpanishGasStationsUtilities::FeatureInit
  u.fetcher = FuelPricesAtSpanishGasStationsUtilities::Fetcher
  u.make_fetch_def = FuelPricesAtSpanishGasStationsUtilities::MakeFetchDef
  u.make_context = FuelPricesAtSpanishGasStationsUtilities::MakeContext
  u.make_options = FuelPricesAtSpanishGasStationsUtilities::MakeOptions
  u.make_request = FuelPricesAtSpanishGasStationsUtilities::MakeRequest
  u.make_response = FuelPricesAtSpanishGasStationsUtilities::MakeResponse
  u.make_result = FuelPricesAtSpanishGasStationsUtilities::MakeResult
  u.make_point = FuelPricesAtSpanishGasStationsUtilities::MakePoint
  u.make_spec = FuelPricesAtSpanishGasStationsUtilities::MakeSpec
  u.make_url = FuelPricesAtSpanishGasStationsUtilities::MakeUrl
  u.param = FuelPricesAtSpanishGasStationsUtilities::Param
  u.prepare_auth = FuelPricesAtSpanishGasStationsUtilities::PrepareAuth
  u.prepare_body = FuelPricesAtSpanishGasStationsUtilities::PrepareBody
  u.prepare_headers = FuelPricesAtSpanishGasStationsUtilities::PrepareHeaders
  u.prepare_method = FuelPricesAtSpanishGasStationsUtilities::PrepareMethod
  u.prepare_params = FuelPricesAtSpanishGasStationsUtilities::PrepareParams
  u.prepare_path = FuelPricesAtSpanishGasStationsUtilities::PreparePath
  u.prepare_query = FuelPricesAtSpanishGasStationsUtilities::PrepareQuery
  u.result_basic = FuelPricesAtSpanishGasStationsUtilities::ResultBasic
  u.result_body = FuelPricesAtSpanishGasStationsUtilities::ResultBody
  u.result_headers = FuelPricesAtSpanishGasStationsUtilities::ResultHeaders
  u.transform_request = FuelPricesAtSpanishGasStationsUtilities::TransformRequest
  u.transform_response = FuelPricesAtSpanishGasStationsUtilities::TransformResponse
}
