import React from "react";
import { ButtonElement } from "./button.styles";

export default function ButtonComponent({ children, type }) {
  return <ButtonElement type={type}>{children} </ButtonElement>;
}
