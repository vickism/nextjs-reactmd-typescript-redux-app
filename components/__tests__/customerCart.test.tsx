import { shallow } from "enzyme";
import React from "react";
import { CardSubtitle, CardTitle } from "react-md";
import CustomerCard from "../customerCard";

describe("Customer Card Component", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<CustomerCard title="Text1" subTitle="Text2" />);
    expect(wrapper).toMatchSnapshot();
  })

  it("has a title", () => {
    const wrapper = shallow(<CustomerCard title="Text1" subTitle="Text2" />);
    const cardTitle = wrapper.find(CardTitle);
    expect(cardTitle.text()).toEqual("Text1");
  })

  it("has a title", () => {
    const wrapper = shallow(<CustomerCard title="Text1" subTitle="Text2" />);
    const cardSubTitle = wrapper.find(CardSubtitle);
    expect(cardSubTitle.text()).toEqual("Text2");
  })
})