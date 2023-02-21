import React from "react";
import { Container } from "./page-content.styles";

export default function PageContentComponent({ children }) {
  return <Container>{children}</Container>;
}
