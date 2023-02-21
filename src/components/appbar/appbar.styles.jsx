import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: 24,
  alignItems: "center",
});

export const PageInfo = styled("div", {
  display: "flex",
  gap: 16,
  flexGrow: 1,
});

export const TitleContainer = styled("div", {
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "21px",
  color: "var(--color-white)",
});
