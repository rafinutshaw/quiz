import React from "react";
import { ButtonElement } from "./button.styles";

export default function ButtonComponent({ children, type, size = "md" }) {
  return (
    <ButtonElement type={type} size={size}>
      {children}
    </ButtonElement>
  );
}
