# ProjectName SDK exists test

import pytest
from fuelpricesatspanishgasstations_sdk import FuelPricesAtSpanishGasStationsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FuelPricesAtSpanishGasStationsSDK.test(None, None)
        assert testsdk is not None
