import { NextApiRequest, NextApiResponse } from "next"
import customerData from "../../data/customers.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(customerData);
}

export default handler;