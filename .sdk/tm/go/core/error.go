package core

type FuelPricesAtSpanishGasStationsError struct {
	IsFuelPricesAtSpanishGasStationsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFuelPricesAtSpanishGasStationsError(code string, msg string, ctx *Context) *FuelPricesAtSpanishGasStationsError {
	return &FuelPricesAtSpanishGasStationsError{
		IsFuelPricesAtSpanishGasStationsError: true,
		Sdk:              "FuelPricesAtSpanishGasStations",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FuelPricesAtSpanishGasStationsError) Error() string {
	return e.Msg
}
