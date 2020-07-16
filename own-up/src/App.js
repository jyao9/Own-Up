import React from "react";
import logo from "./logo.svg";
import QuoteRatePage from "./components/QuoteRatePage";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <QuoteRatePage />
    </Provider>
  );
}

export default App;
