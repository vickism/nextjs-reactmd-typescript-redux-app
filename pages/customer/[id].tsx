import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import {Text, TextArea, TextContainer } from "react-md";

type Params = {
  id: string
}

type Props = {
  customer: Customer 
}
type Customer = {
  id: number;
  name: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => 
{
  const paths = [0,1].map((_) => `/customer/${_}`);  
  return { paths, fallback: true };
} 

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const req = await fetch(process.env.NEXT_PUBLIC_API_BASEURL + '/api/customer/' + params!.id);
  const customer: Customer = await req.json();

  return {
    props: { customer }
  };
}

const CustomerDetail = ({customer}: Props) => {
  if (!customer)
    return "Loading...";
  return (
    <TextContainer>
      <h2>Customer Detail</h2>
      <TextArea id="configurable-textarea" label="Customer Id" defaultValue={customer.id.toString()}></TextArea>
      <Text type="body-1">{customer.name}</Text>
    </TextContainer>
  )
}

export default CustomerDetail;