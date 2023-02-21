import React from "react";
import PointComponent from "../point/point.component";
import { Container, Description, Info, Title } from "./list-item.styles";

export default function ListItemComponent({ leadingIcon, title, description }) {
  return (
    <Container>
      <PointComponent color={"black"}>{leadingIcon}</PointComponent>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}
