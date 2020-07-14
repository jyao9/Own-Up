import { expect } from "chai";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

import QuoteRatePage from "./QuoteRatePage";
import QuoteForm from "./QuoteForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<QuoteRatePage />", () => {
  it("renders one <QuoteForm /> component", () => {
    const wrapper = shallow(<QuoteRatePage />);
    expect(wrapper.find(QuoteForm)).to.have.lengthOf(1);
  });
});
