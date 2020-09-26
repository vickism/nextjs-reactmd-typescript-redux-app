import React, { ReactNode } from "react";
import CustomerCard from "../components/customerCard";
import customerList from "../data/customers.json";

type Props = {
  customers: Customer[]
}

type Customer = {
  name: string;
  subTitle: string;
  id: number;
}

export default class Customers extends React.Component<Props> {
  render(): ReactNode {
    console.log(this.props);
    return (
      <div>
        <h1>Customers</h1>
        {
          this.props.customers.map(c => <CustomerCard key={c.id} title={c.name} subTitle={c.subTitle} />)
        }
      </div>
    )
  }
}

export async function getStaticProps() {
  return {
    props: { customers: customerList }
  };
}