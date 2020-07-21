import React from "react";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { fetchQuoteRates } from "../actions/quoteRateActions";
import "./QuoteForm.css";

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanSize: 0,
      creditScore: 0,
      propertyType: "SingleFamily",
      occupancy: "Primary",
    };

    this.handleLoanSizeValueChange = this.handleLoanSizeValueChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLoanSizeValueChange(values) {
    this.setState({
      loanSize: values.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchQuoteRates(this.state);
  }

  render() {
    return (
      <form className="quote-form" onSubmit={this.handleSubmit}>
        <div className="form-column">
          <label className="quote-form-field">
            Loan Size
            <NumberFormat
              thousandSeparator={true}
              prefix={"$"}
              allowLeadingZeros={false}
              allowNegative={false}
              decimalScale={2}
              name="loanSize"
              className="loan-size"
              type="text"
              value={this.state.loanSize}
              onValueChange={this.handleLoanSizeValueChange}
            />
          </label>
          <label className="quote-form-field">
            Credit Score
            <input
              name="creditScore"
              className="credit-score"
              type="number"
              min="300"
              max="800"
              value={this.state.creditScore}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="form-column-spacer"></div>
        <div className="form-column">
          <label className="quote-form-field">
            Property Type
            <select
              name="propertyType"
              className="property-type"
              value={this.state.propertyType}
              onChange={this.handleInputChange}
            >
              <option value="SingleFamily">Single Family</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="MultiFamily">Multi Family</option>
            </select>
          </label>
          <label className="quote-form-field">
            Occupancy
            <select
              name="occupancy"
              className="occupancy"
              value={this.state.occupancy}
              onChange={this.handleInputChange}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Investment">Investment</option>
            </select>
          </label>
        </div>
        <button type="submit">Quote Rates</button>
      </form>
    );
  }
}

export default connect(null, { fetchQuoteRates })(QuoteForm);
export { QuoteForm };
