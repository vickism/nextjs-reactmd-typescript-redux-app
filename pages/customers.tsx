import { GetStaticProps } from "next";
import React, { ReactNode } from "react";
import CustomerCard from "../components/customerCard";

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

export const getStaticProps: GetStaticProps<Props, any> = async () =>
{
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASEURL+ '/api/customer');
  const customerList: Customer[] = await res.json();

  return {
    props: { customers: customerList }
  };
}