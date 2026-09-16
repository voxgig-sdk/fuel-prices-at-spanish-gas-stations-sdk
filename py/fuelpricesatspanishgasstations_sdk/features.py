# FuelPricesAtSpanishGasStations SDK feature factory

from fuelpricesatspanishgasstations_sdk.feature.base_feature import FuelPricesAtSpanishGasStationsBaseFeature
from fuelpricesatspanishgasstations_sdk.feature.ratelimit_feature import FuelPricesAtSpanishGasStationsRatelimitFeature
from fuelpricesatspanishgasstations_sdk.feature.retry_feature import FuelPricesAtSpanishGasStationsRetryFeature
from fuelpricesatspanishgasstations_sdk.feature.test_feature import FuelPricesAtSpanishGasStationsTestFeature
from fuelpricesatspanishgasstations_sdk.feature.timeout_feature import FuelPricesAtSpanishGasStationsTimeoutFeature


_FEATURES = {
    "base": lambda: FuelPricesAtSpanishGasStationsBaseFeature(),
    "ratelimit": lambda: FuelPricesAtSpanishGasStationsRatelimitFeature(),
    "retry": lambda: FuelPricesAtSpanishGasStationsRetryFeature(),
    "test": lambda: FuelPricesAtSpanishGasStationsTestFeature(),
    "timeout": lambda: FuelPricesAtSpanishGasStationsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
