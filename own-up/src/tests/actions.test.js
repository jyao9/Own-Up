import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as quoteRateActions from "../actions/quoteRateActions";
import * as types from "../actions/types";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("quote rate actions", () => {
  let mock;
  let store;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    store = mockStore({ quoteRates: null, isLoading: false });
  });

  afterEach(() => {
    mock.restore();
    store.clearActions();
  });

  it("creates FETCH_QUOTE_RATES when GET request called successfully", async () => {
    mock
      .onGet(
        "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes"
      )
      .reply(200, { rateQuotes: ["quote1", "quote2", "quote3"] });

    const expectedActions = [
      {
        type: types.FETCH_QUOTE_RATES_REQUEST,
        isLoading: true,
      },
      {
        type: types.FETCH_QUOTE_RATES,
        quoteRates: ["quote1", "quote2", "quote3"],
        isLoading: false,
      },
    ];

    await store.dispatch(quoteRateActions.fetchQuoteRates());
    // Return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });
});
