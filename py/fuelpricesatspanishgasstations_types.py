# Typed models for the FuelPricesAtSpanishGasStations SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dataset:
    description: Optional[str] = None
    distribution: Optional[list] = None
    id: Optional[str] = None
    keyword: Optional[list] = None
    modified: Optional[str] = None
    publisher: Optional[dict] = None
    result: Optional[dict] = None
    theme: Optional[list] = None
    title: Optional[str] = None


@dataclass
class DatasetLoadMatch:
    id: str


@dataclass
class Distribution:
    result: Optional[dict] = None


@dataclass
class DistributionLoadMatch:
    result: Optional[dict] = None

