import { styled } from "@stitches/react";

export const SectionHeader = styled("div", {
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "22px",
  color: "var(--color-black)",
});

export const ContentInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  marginBottom: 24,
});

export const InstructionsHeader = styled("div", {
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 14,
  lineHeight: "19px",
});

export const Instruction = styled("div", {
  paddingLeft: 22,
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "19px",
  position: "relative",

  "&:before": {
    content: "",
    position: "absolute",
    height: 6,
    width: 6,
    left: 0,
    top: 6,
    backgroundColor: "var(--color-black)",
    borderRadius: "50%",
  },
});
