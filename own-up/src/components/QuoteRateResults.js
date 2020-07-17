import React, { Component } from "react";
import { connect } from "react-redux";
import fetchQuoteRates from "../actions/quoteRateActions";

class QuoteRateResults extends Component {
  render() {
    console.log("results");
    console.log(this.props);
    let listOfRates;
    if (this.props.quoteRates) {
      console.log(this.props.quoteRates.rateQuotes);
      listOfRates = this.props.quoteRates.rateQuotes.map((rate) => {
        let key =
          rate.lenderName.split("").splice(0, 3).join("") +
          rate.loanType +
          rate.apr;
        return (
          <div className="row" key={key}>
            <div>{rate.lenderName}</div>
            <div>{rate.loanType}</div>
            <div>{rate.interestRate}</div>
            <div>{rate.closingCosts}</div>
            <div>{rate.monthlyPayment.toFixed(0)}</div>
            <div>{rate.apr.toFixed(2)}</div>
          </div>
        );
      });
    }
    return (
      <div>
        {listOfRates && <div className="quoteTable">{listOfRates}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quoteRates: state.quoteRates.quotes,
});

export default connect(mapStateToProps, { fetchQuoteRates })(QuoteRateResults);
