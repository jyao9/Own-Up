import React from "react";
import QuoteForm from "./QuoteForm";
import "./QuoteRatePage.css";
import QuoteRateResults from "./QuoteRateResults";

export default function QuoteRatePage() {
  return (
    <div className="base">
      <QuoteForm />
      <QuoteRateResults />
    </div>
  );
}
