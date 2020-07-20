import quoteRateReducer from "../reducers/quoteRateReducer";
import * as types from "../actions/types";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(quoteRateReducer(undefined, {})).toEqual({
      quoteRates: null,
    });
  });

  it("should handle FETCH_QUOTE_RATES", () => {
    expect(
      quoteRateReducer(undefined, {
        type: types.FETCH_QUOTE_RATES,
        quoteRates: [],
      })
    ).toEqual({
      quoteRates: [],
    });

    expect(
      quoteRateReducer(undefined, {
        type: types.FETCH_QUOTE_RATES,
        quoteRates: ["quote1", "quote2", "quote3"],
      })
    ).toEqual({
      quoteRates: ["quote1", "quote2", "quote3"],
    });
  });
});
