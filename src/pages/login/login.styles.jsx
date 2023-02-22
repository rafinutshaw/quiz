import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  height: "100%",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "var(--color-white)",
  padding: 30,
});

export const Instruction = styled("div", {
  fontWeight: 600,
  fontSize: 16,
});
