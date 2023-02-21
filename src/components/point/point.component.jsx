import React from "react";
import { Container } from "./point.styles";

export default function PointComponent({ children, color }) {
  return <Container color={color}>{children}</Container>;
}
