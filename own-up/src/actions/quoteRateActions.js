import {
  FETCH_QUOTE_RATES,
  FETCH_QUOTE_RATES_REQUEST,
  FETCH_NEXT_QUOTE_RATES,
} from "./types";
import axios from "axios";

export const fetchQuoteRates = (fetchQuoteParams) => {
  return function (dispatch) {
    dispatch({
      type: FETCH_QUOTE_RATES_REQUEST,
      isLoading: true,
    });
    return axios
      .get(
        "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotepages",
        {
          headers: {
            Authorization: `OU-AUTH ${process.env.REACT_APP_OWN_UP_API_KEY}`,
          },
          params: fetchQuoteParams,
        }
      )
      .then((response) => {
        console.log("response");
        console.log(response.data);
        return dispatch({
          type: FETCH_QUOTE_RATES,
          quoteRates: response.data.rateQuotes,
          isLoading: false,
          next: response.data.next,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };
};

export const fetchNextQuoteRates = (fetchQuoteParams) => {
  return function (dispatch) {
    dispatch({
      type: FETCH_QUOTE_RATES_REQUEST,
      isLoading: true,
    });
    return axios
      .get(
        "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotepages",
        {
          headers: {
            Authorization: `OU-AUTH ${process.env.REACT_APP_OWN_UP_API_KEY}`,
          },
          params: fetchQuoteParams,
        }
      )
      .then((response) => {
        console.log("response");
        console.log(response.data);
        return dispatch({
          type: FETCH_NEXT_QUOTE_RATES,
          quoteRates: response.data.rateQuotes,
          isLoading: false,
          next: response.data.next,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };
};
