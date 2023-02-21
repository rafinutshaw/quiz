import { styled } from "@stitches/react";

export const QuizList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const ContinueSectionHeader = styled("div", {
  fontFamily: "Ubuntu",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "21px",
  margin: "16px 0",
});

export const FloatingBottomButton = styled("div", {
  position: "absolute",
  bottom: 40,
  left: 0,
  right: 0,
  padding: "0 24px",
});
