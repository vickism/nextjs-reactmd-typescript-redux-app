import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import {Text, TextArea, TextContainer } from "react-md";
import customerList from "../../data/customers.json";

type Params = {
  id: string
}
type Props = {
  data: Customer 
}
type Customer = {
  id: number;
  name: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => 
{
  //const paths = customerList.map((_) => `/customer/${_.id}`);
  const paths = [0,1].map((_) => `/customer/${_}`);
  
  return { paths, fallback: true };
} 

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const customer: Customer = customerList.find(c =>  c.id == +params!.id) as Customer;
  return {
    props: { data: customer }
  };
}

const CustomerDetail = ({data}: Props) => {
  if (!data)
    return "";
  return (
    <TextContainer>
      <h2>Customer Detail</h2>
      <TextArea id="configurable-textarea" label="Customer Id" defaultValue={data.id.toString()}></TextArea>
      <Text type="body-1"> {data.name} </Text>
    </TextContainer>
  )
}
export default CustomerDetail;