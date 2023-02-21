import React from "react";
import { ButtonElement } from "./button.styles";

export default function ButtonComponent({
  children,
  type,
  size = "md",
  onClick,
}) {
  return (
    <ButtonElement onClick={onClick} type={type} size={size}>
      {children}
    </ButtonElement>
  );
}
