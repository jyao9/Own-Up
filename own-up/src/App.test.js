import { expect } from "chai";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

import App from "./App";
import QuoteRatePage from "./components/QuoteRatePage";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders one <QuoteRatePage /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(QuoteRatePage)).to.have.lengthOf(1);
  });
});
