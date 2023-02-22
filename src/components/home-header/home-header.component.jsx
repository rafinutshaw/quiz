import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import SearchBoxComponent from "../search-box/search-box.component";
import { Container, Greetings, Motivation } from "./home-header.styles";

export default function HomeHeaderComponent() {
  const { user } = useAuth0();

  return (
    <Container>
      <Greetings>Hello, {user.given_name}</Greetings>
      <Motivation>Let's test your knowledge</Motivation>
      <SearchBoxComponent />
    </Container>
  );
}
