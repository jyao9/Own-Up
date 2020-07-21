import { FETCH_QUOTE_RATES, FETCH_QUOTE_RATES_REQUEST } from "../actions/types";

const initialState = {
  quoteRates: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE_RATES:
      console.log("reducer");
      console.log(action);
      return {
        ...state,
        quoteRates: action.quoteRates,
        isLoading: action.isLoading,
      };
    case FETCH_QUOTE_RATES_REQUEST:
      console.log("request");
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
