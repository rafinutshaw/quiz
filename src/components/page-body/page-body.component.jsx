import React from "react";
import { ChildrenContainer, Container, Indicator } from "./page-body.styles";

export default function PageBodyComponent({ children }) {
  return (
    <Container>
      <Indicator />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
