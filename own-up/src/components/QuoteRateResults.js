import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchQuoteRates } from "../actions/quoteRateActions";
import { connect } from "react-redux";
import "./QuoteRateResults.css";

class QuoteRateResults extends Component {
  render() {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    let listOfRates;
    if (this.props.quoteRates) {
      console.log(this.props.quoteRates);
      listOfRates = this.props.quoteRates.map((rate) => {
        let key =
          rate.lenderName.split("").splice(0, 3).join("") +
          rate.loanType +
          rate.apr;
        return (
          <div className="quote-row" key={key}>
            <div className="quote-column">{rate.lenderName}</div>
            <div className="quote-column">{rate.loanType}</div>
            <div className="quote-column">{rate.interestRate}%</div>
            <div className="quote-column">
              {currencyFormatter.format(rate.closingCosts)}
            </div>
            <div className="quote-column">
              {currencyFormatter.format(rate.monthlyPayment.toFixed(0))}
            </div>
            <div className="quote-column">{rate.apr.toFixed(2)}%</div>
          </div>
        );
      });
    }
    return (
      <div>
        {listOfRates && (
          <div className="quoteTable">
            <div className="columnNames quote-row">
              <div className="quote-column">Lender</div>
              <div className="quote-column">Product</div>
              <div className="quote-column">Rate</div>
              <div className="quote-column">Closing Costs</div>
              <div className="quote-column">Monthly Payment</div>
              <div className="quote-column">APR</div>
            </div>
            {listOfRates.length !== 0 ? (
              listOfRates
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

QuoteRateResults.propTypes = {
  fetchQuoteRates: PropTypes.func.isRequired,
  quoteRates: PropTypes.array,
};

const mapStateToProps = (state) => ({
  quoteRates: state.quoteRates.quoteRates,
});

export default connect(mapStateToProps, { fetchQuoteRates })(QuoteRateResults);
export { QuoteRateResults };
