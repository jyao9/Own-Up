import { FETCH_QUOTE_RATES } from "../actions/types";

const initialState = {
  quotesRates: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE_RATES:
      return {
        ...state,
        quotes: action.quotesRates,
      };
    default:
      return state;
  }
}
