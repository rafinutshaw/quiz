import { styled } from "@stitches/react";

export const QuestionWrapper = styled("div", {});

export const QuestionLabel = styled("div", {
  fontFamily: "Ubuntu",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "18px",
  marginBottom: 27,
});

export const OptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const OptionLabel = styled("div", {
  fontFamily: "Ubuntu",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "16px",
});

export const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
