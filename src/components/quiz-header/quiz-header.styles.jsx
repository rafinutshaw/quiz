import { styled } from "@stitches/react";

export const Container = styled("div", {
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  marginTop: 16,
});

export const Title = styled("div", {
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "21px",
  color: "var(--color-white)",
});

export const Description = styled("div", {
  marginTop: 8,
  fontWeight: 600,
  fontSize: 12,
  lineHeight: "16px",
  color: "var(--color-white)",
  fontFamily: "Nunito",
});

export const Rating = styled("div", {
  fontWeight: 600,
  fontSize: 18,
  lineHeight: "25px",
  color: "var(--color-white)",
  fontFamily: "Nunito",
});

export const LeftPanel = styled("div", {
  flexGrow: 1,
});

export const RightPanel = styled("div", {
  display: "flex",
  gap: 6,
});
