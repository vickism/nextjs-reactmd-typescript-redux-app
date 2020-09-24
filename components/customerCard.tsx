import React from "react";
import { Card, CardSubtitle, CardTitle } from "react-md";

type Props = {
  title: string;
  subTitle: string;
}

const CustomerCard = ({title, subTitle}: Props) : JSX.Element  => {
  // console.log(`${title} - ${subTitle}`);

  return (
    <div>
      <Card>
        <CardTitle>{title ?? "Title"}</CardTitle>
        <CardSubtitle>{subTitle ?? "Sub Title"}</CardSubtitle>
        </Card>
      </div>
    )
}

export default CustomerCard;