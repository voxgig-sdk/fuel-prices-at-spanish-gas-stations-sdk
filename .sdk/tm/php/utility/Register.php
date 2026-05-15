<?php
declare(strict_types=1);

// FuelPricesAtSpanishGasStations SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FuelPricesAtSpanishGasStationsUtility::setRegistrar(function (FuelPricesAtSpanishGasStationsUtility $u): void {
    $u->clean = [FuelPricesAtSpanishGasStationsClean::class, 'call'];
    $u->done = [FuelPricesAtSpanishGasStationsDone::class, 'call'];
    $u->make_error = [FuelPricesAtSpanishGasStationsMakeError::class, 'call'];
    $u->feature_add = [FuelPricesAtSpanishGasStationsFeatureAdd::class, 'call'];
    $u->feature_hook = [FuelPricesAtSpanishGasStationsFeatureHook::class, 'call'];
    $u->feature_init = [FuelPricesAtSpanishGasStationsFeatureInit::class, 'call'];
    $u->fetcher = [FuelPricesAtSpanishGasStationsFetcher::class, 'call'];
    $u->make_fetch_def = [FuelPricesAtSpanishGasStationsMakeFetchDef::class, 'call'];
    $u->make_context = [FuelPricesAtSpanishGasStationsMakeContext::class, 'call'];
    $u->make_options = [FuelPricesAtSpanishGasStationsMakeOptions::class, 'call'];
    $u->make_request = [FuelPricesAtSpanishGasStationsMakeRequest::class, 'call'];
    $u->make_response = [FuelPricesAtSpanishGasStationsMakeResponse::class, 'call'];
    $u->make_result = [FuelPricesAtSpanishGasStationsMakeResult::class, 'call'];
    $u->make_point = [FuelPricesAtSpanishGasStationsMakePoint::class, 'call'];
    $u->make_spec = [FuelPricesAtSpanishGasStationsMakeSpec::class, 'call'];
    $u->make_url = [FuelPricesAtSpanishGasStationsMakeUrl::class, 'call'];
    $u->param = [FuelPricesAtSpanishGasStationsParam::class, 'call'];
    $u->prepare_auth = [FuelPricesAtSpanishGasStationsPrepareAuth::class, 'call'];
    $u->prepare_body = [FuelPricesAtSpanishGasStationsPrepareBody::class, 'call'];
    $u->prepare_headers = [FuelPricesAtSpanishGasStationsPrepareHeaders::class, 'call'];
    $u->prepare_method = [FuelPricesAtSpanishGasStationsPrepareMethod::class, 'call'];
    $u->prepare_params = [FuelPricesAtSpanishGasStationsPrepareParams::class, 'call'];
    $u->prepare_path = [FuelPricesAtSpanishGasStationsPreparePath::class, 'call'];
    $u->prepare_query = [FuelPricesAtSpanishGasStationsPrepareQuery::class, 'call'];
    $u->result_basic = [FuelPricesAtSpanishGasStationsResultBasic::class, 'call'];
    $u->result_body = [FuelPricesAtSpanishGasStationsResultBody::class, 'call'];
    $u->result_headers = [FuelPricesAtSpanishGasStationsResultHeaders::class, 'call'];
    $u->transform_request = [FuelPricesAtSpanishGasStationsTransformRequest::class, 'call'];
    $u->transform_response = [FuelPricesAtSpanishGasStationsTransformResponse::class, 'call'];
});
