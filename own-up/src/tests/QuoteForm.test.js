import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

import { QuoteForm } from "../components/QuoteForm";

Enzyme.configure({ adapter: new Adapter() });

// Test rendering.

describe("<QuoteForm />", () => {
  let props;

  beforeEach(() => {
    props = {
      quoteRates: [],
    };
  });

  it("renders a `form`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("renders 4 `label`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("label")).toHaveLength(4);
  });

  // Test state changes.

  it("changes loanSize state when loan size input is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper.find(".loan-size").simulate("valueChange", { value: 100000 });
    expect(wrapper.state("loanSize")).toEqual(100000);
  });

  it("changes creditScore state when credit score input is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".credit-score")
      .simulate("change", { target: { value: 750, name: "creditScore" } });
    expect(wrapper.state("creditScore")).toEqual(750);
  });

  it("should have a default propertyType state of `SingleFamily`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.state("propertyType")).toEqual("SingleFamily");
  });

  it("should update propertyType state when property type is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".property-type")
      .simulate("change", { target: { value: "Condo", name: "propertyType" } });
    expect(wrapper.state("propertyType")).toEqual("Condo");
  });

  it("should have a default occupancy state of `Primary`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.state("occupancy")).toEqual("Primary");
  });

  it("should update occupancy state when property type is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper.find(".occupancy").simulate("change", {
      target: { value: "Investment", name: "occupancy" },
    });
    expect(wrapper.state("occupancy")).toEqual("Investment");
  });

  // Test submit button.

  it("should call fetchQuoteRates when form is submitted", () => {
    const fakeEvent = { preventDefault: () => {} };
    props.fetchQuoteRates = jest.fn();
    const wrapper = shallow(<QuoteForm {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, "fetchQuoteRates");
    wrapper.find("form").simulate("submit", fakeEvent);
    expect(spy).toHaveBeenCalled();
  });
});
