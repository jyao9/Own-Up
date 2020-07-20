import { FETCH_QUOTE_RATES } from "./types";
import axios from "axios";

export default function fetchQuoteRates(fetchQuoteParams) {
  return function (dispatch) {
    axios
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
        console.log(response.status);
        console.log(response.data);
        return dispatch({
          type: FETCH_QUOTE_RATES,
          quoteRates: response.data.rateQuotes,
        });
      })
      .catch((error) => {
        console.log("error");
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };
}
