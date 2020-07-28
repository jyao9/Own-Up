import {
  FETCH_QUOTE_RATES,
  FETCH_QUOTE_RATES_REQUEST,
  FETCH_NEXT_QUOTE_RATES,
} from "../actions/types";

const initialState = {
  quoteRates: null,
  isLoading: false,
  next: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE_RATES:
      return {
        ...state,
        quoteRates: action.quoteRates,
        isLoading: action.isLoading,
        next: action.next,
      };
    case FETCH_QUOTE_RATES_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case FETCH_NEXT_QUOTE_RATES:
      return {
        ...state,
        quoteRates: action.quoteRates,
        isLoading: action.isLoading,
        next: action.next,
      };
    default:
      return state;
  }
}
