# FuelPricesAtSpanishGasStations SDK feature factory

from fuelpricesatspanishgasstations_sdk.feature.base_feature import FuelPricesAtSpanishGasStationsBaseFeature
from fuelpricesatspanishgasstations_sdk.feature.test_feature import FuelPricesAtSpanishGasStationsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FuelPricesAtSpanishGasStationsBaseFeature(),
        "test": lambda: FuelPricesAtSpanishGasStationsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
