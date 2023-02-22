import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ButtonComponent from "../../components/button/button.component";
import { Container, Instruction } from "./login.styles";

export default function LoginPage({ onClick }) {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <Container>
      <Instruction>Please Login to Continue</Instruction>
      <ButtonComponent
        isDisabled={isLoading}
        type={!isLoading ? "primary" : "gray"}
        onClick={loginWithRedirect}
      >
        {isLoading ? "Please wait" : "Login"}
      </ButtonComponent>
    </Container>
  );
}
