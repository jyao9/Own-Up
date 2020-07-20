import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

import { QuoteRateResults } from "../components/QuoteRateResults";

Enzyme.configure({ adapter: new Adapter() });

describe("<QuoteRateResults />", () => {
  let props;

  beforeEach(() => {
    props = {
      quoteRates: null,
      fetchQuoteRates: () => {},
    };
  });

  it("doesn't render any rows when quoteRates", () => {
    const wrapper = shallow(<QuoteRateResults {...props} />);
    expect(wrapper.find(".row")).toHaveLength(0);
  });

  it("renders rows when quoteRates are present", () => {
    props.quoteRates = [];
    props.quoteRates.push({
      lenderName: "Bob",
      loanType: "A",
      interestRate: "3%",
      closingCosts: "$30,000",
      monthlyPayment: 300,
      apr: 3.75,
    });
    props.quoteRates.push({
      lenderName: "Mark",
      loanType: "B",
      interestRate: "5%",
      closingCosts: "$20,000",
      monthlyPayment: 500,
      apr: 3.45,
    });
    const wrapper = shallow(<QuoteRateResults {...props} />);
    expect(wrapper.find(".row")).toHaveLength(2);
  });
});
