import { FETCH_QUOTE_RATES } from "../actions/types";

const initialState = {
  quotesRates: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE_RATES:
      console.log("reducer");
      console.log(action);
      return {
        ...state,
        quotes: action.quoteRates,
      };
    default:
      return state;
  }
}
