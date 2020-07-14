import React from "react";
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

    this.handleCreditScoreChange = this.handleCreditScoreChange.bind(this);
    this.handleLoanSizeChange = this.handleLoanSizeChange.bind(this);
    this.handleOccupancyChange = this.handleOccupancyChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoanSizeChange(event) {
    this.setState({ loanSize: event.target.value });
  }

  handleCreditScoreChange(event) {
    this.setState({ creditScore: event.target.value });
  }

  handlePropertyTypeChange(event) {
    this.setState({ propertyType: event.target.value });
  }

  handleOccupancyChange(event) {
    this.setState({ occupancy: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col">
          <label>
            Loan Size
            <input
              className="loan-size"
              type="text"
              value={this.state.loanSize}
              onChange={this.handleLoanSizeChange}
            />
          </label>
          <label>
            Property Type
            <select
              className="property-type"
              value={this.state.propertyType}
              onChange={this.handlePropertyTypeChange}
            >
              <option value="SingleFamily">Single Family</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="MultiFamily">Multi Family</option>
            </select>
          </label>
        </div>
        <div className="col">
          <label>
            Credit Score
            <input
              className="credit-score"
              type="text"
              value={this.state.creditScore}
              onChange={this.handleCreditScoreChange}
            />
          </label>

          <label>
            Occupancy
            <select
              className="occupancy"
              value={this.state.occupancy}
              onChange={this.handleOccupancyChange}
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

export default QuoteForm;
