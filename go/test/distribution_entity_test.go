package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk"
	"github.com/voxgig-sdk/fuel-prices-at-spanish-gas-stations-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestDistributionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Distribution(nil)
		if ent == nil {
			t.Fatal("expected non-nil DistributionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := distributionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "distribution." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		distributionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.distribution", setup.data)))
		var distributionRef01Data map[string]any
		if len(distributionRef01DataRaw) > 0 {
			distributionRef01Data = core.ToMapAny(distributionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = distributionRef01Data

		// LOAD
		distributionRef01Ent := client.Distribution(nil)
		distributionRef01MatchDt0 := map[string]any{}
		distributionRef01DataDt0Loaded, err := distributionRef01Ent.Load(distributionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if distributionRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func distributionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "distribution", "DistributionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read distribution test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse distribution test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"distribution01", "distribution02", "distribution03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID": idmap,
		"FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE":      "FALSE",
		"FUELPRICESATSPANISHGASSTATIONS_TEST_EXPLAIN":   "FALSE",
		"FUELPRICESATSPANISHGASSTATIONS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["FUELPRICESATSPANISHGASSTATIONS_TEST_DISTRIBUTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["FUELPRICESATSPANISHGASSTATIONS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewFuelPricesAtSpanishGasStationsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["FUELPRICESATSPANISHGASSTATIONS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["FUELPRICESATSPANISHGASSTATIONS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
