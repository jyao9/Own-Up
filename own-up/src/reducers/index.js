import { combineReducers } from "redux";
import quoteRateReducer from "./quoteRateReducer";

export default combineReducers({
  quoteRates: quoteRateReducer,
});
