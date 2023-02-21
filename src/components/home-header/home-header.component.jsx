import React from "react";
import SearchBoxComponent from "../search-box/search-box.component";
import { Container, Greetings, Motivation } from "./home-header.styles";

export default function HomeHeaderComponent() {
  return (
    <Container>
      <Greetings>Hello</Greetings>
      <Motivation>Let's test your knowledge</Motivation>
      <SearchBoxComponent />
    </Container>
  );
}
