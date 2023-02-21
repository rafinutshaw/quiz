import React from "react";
import { Container } from "./point.styles";

export default function PointComponent({ children, color, size = "md" }) {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  );
}
