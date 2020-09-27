import React from "react";
import { Card, CardSubtitle, CardTitle } from "react-md";

type Props = {
  title: string;
  subTitle: string;
}

const CustomerCard = ({title, subTitle}: Props) : JSX.Element  => {
  return (
    <div>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subTitle}</CardSubtitle>
        </Card>
      </div>
    )
}

export default CustomerCard;