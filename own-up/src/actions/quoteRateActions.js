import { FETCH_QUOTE_RATES, FETCH_QUOTE_RATES_REQUEST } from "./types";
import axios from "axios";

export const fetchQuoteRates = (fetchQuoteParams) => {
  return function (dispatch) {
    dispatch({
      type: FETCH_QUOTE_RATES_REQUEST,
      isLoading: true,
    });
    return axios
      .get(
        "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes",
        {
          headers: {
            Authorization: `OU-AUTH ${process.env.REACT_APP_OWN_UP_API_KEY}`,
          },
          params: fetchQuoteParams,
        }
      )
      .then((response) => {
        return dispatch({
          type: FETCH_QUOTE_RATES,
          quoteRates: response.data.rateQuotes,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };
};
