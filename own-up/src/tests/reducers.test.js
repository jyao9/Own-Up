import quoteRateReducer from "../reducers/quoteRateReducer";
import * as types from "../actions/types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(quoteRateReducer(undefined, {})).toEqual({
      quoteRates: null,
      isLoading: false,
    });
  });

  it("should handle FETCH_QUOTE_RATES", () => {
    expect(
      quoteRateReducer(undefined, {
        type: types.FETCH_QUOTE_RATES,
        quoteRates: [],
        isLoading: false,
      })
    ).toEqual({
      quoteRates: [],
      isLoading: false,
    });

    expect(
      quoteRateReducer(undefined, {
        type: types.FETCH_QUOTE_RATES,
        quoteRates: ["quote1", "quote2", "quote3"],
        isLoading: false,
      })
    ).toEqual({
      quoteRates: ["quote1", "quote2", "quote3"],
      isLoading: false,
    });
  });

  it("should handle FETCH_QUOTE_RATES_REQUEST", () => {
    expect(
      quoteRateReducer(undefined, {
        type: types.FETCH_QUOTE_RATES_REQUEST,
        isLoading: true,
      })
    ).toEqual({
      quoteRates: null,
      isLoading: true,
    });
  });
});
