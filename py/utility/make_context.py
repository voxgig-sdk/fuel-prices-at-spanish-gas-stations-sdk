# FuelPricesAtSpanishGasStations SDK utility: make_context

from core.context import FuelPricesAtSpanishGasStationsContext


def make_context_util(ctxmap, basectx):
    return FuelPricesAtSpanishGasStationsContext(ctxmap, basectx)
