import { expect } from "chai";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

import QuoteForm from "./QuoteForm";

Enzyme.configure({ adapter: new Adapter() });

// Test rendering.

describe("<QuoteForm />", () => {
  it("renders a `form`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("form")).to.have.lengthOf(1);
  });

  it("renders 4 `label`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("label")).to.have.lengthOf(4);
  });

  it("renders 2 `input`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("input")).to.have.lengthOf(2);
  });

  it("renders 2 `select`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.find("select")).to.have.lengthOf(2);
  });

  // Test state changes.

  it("changes loanSize state when loan size input is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".loan-size")
      .simulate("change", { target: { value: 100000, name: "loanSize" } });
    expect(wrapper.state("loanSize")).to.equal(100000);
  });

  it("changes creditScore state when credit score input is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".credit-score")
      .simulate("change", { target: { value: 750, name: "creditScore" } });
    expect(wrapper.state("creditScore")).to.equal(750);
  });

  it("should have a default propertyType state of `SingleFamily`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.state("propertyType")).to.equal("SingleFamily");
  });

  it("should update propertyType state when property type is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".property-type")
      .simulate("change", { target: { value: "Condo", name: "propertyType" } });
    expect(wrapper.state("propertyType")).to.equal("Condo");
  });

  it("should have a default occupancy state of `Primary`", () => {
    const wrapper = shallow(<QuoteForm />);
    expect(wrapper.state("occupancy")).to.equal("Primary");
  });

  it("should update occupancy state when property type is changed", () => {
    const wrapper = shallow(<QuoteForm />);
    wrapper
      .find(".occupancy")
      .simulate("change", {
        target: { value: "Investment", name: "occupancy" },
      });
    expect(wrapper.state("occupancy")).to.equal("Investment");
  });
});
