import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  position: "relative",
});

export const TrailingIcon = styled("div", {
  position: "absolute",
  left: 10,
  top: "50%",
  transform: "translateY(-50%)",
});

export const LeadingIcon = styled("div", {
  position: "absolute",
  right: 10,
  top: "50%",
  transform: "translateY(-50%)",
});

export const Input = styled("input", {
  borderRadius: 35,
  borderWidth: 0,
  height: 40,
  padding: "0 40px",
  width: "100%",
  lineHeight: "19px",

  "&:focus": {
    outline: 0,
  },
  "&::placeholder": {
    fontFamily: "Nunito",
    fontSize: 14,
    color: "var(--color-gray-300)",
  },
});
