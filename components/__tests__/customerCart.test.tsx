import { shallow } from "enzyme";
import React from "react";
import CustomerCard from "../customerCard";

describe("Customer Card Component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<CustomerCard title="Text1" subTitle="Text2" />);
    expect(wrapper).toMatchSnapshot();
  } )
})