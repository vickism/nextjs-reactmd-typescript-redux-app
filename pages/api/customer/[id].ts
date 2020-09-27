import { NextApiRequest, NextApiResponse } from "next";
import customerData from "../../../data/customers.json";

type Customer = {
  id: number;
  name: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const {query: { id }} = req 

  const customer: Customer = customerData.find(c => c.id === +id) as Customer;
  
  res.status(200).json(customer);
}

export default handler;