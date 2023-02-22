import React from "react";
import ButtonComponent from "../../components/button/button.component";
import { Container, Instruction } from "./login.styles";

export default function LoginPage({ onClick }) {
  return (
    <Container>
      <Instruction>Please Login to Continue</Instruction>
      <div>
        <ButtonComponent type={"primary"} onClick={onClick}>
          Login
        </ButtonComponent>
      </div>
    </Container>
  );
}
