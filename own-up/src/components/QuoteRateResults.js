import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchQuoteRates } from "../actions/quoteRateActions";
import { connect } from "react-redux";

class QuoteRateResults extends Component {
  render() {
    console.log("results");
    console.log(this.props);
    let listOfRates;
    if (this.props.quoteRates) {
      console.log(this.props.quoteRates);
      listOfRates = this.props.quoteRates.map((rate) => {
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

QuoteRateResults.propTypes = {
  fetchQuoteRates: PropTypes.func.isRequired,
  quoteRates: PropTypes.array,
};

const mapStateToProps = (state) => ({
  quoteRates: state.quoteRates.quoteRates,
});

export default connect(mapStateToProps, { fetchQuoteRates })(QuoteRateResults);
export { QuoteRateResults };
