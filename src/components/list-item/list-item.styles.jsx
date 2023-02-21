import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const Info = styled("div", {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: 3,
});

export const Title = styled("div", {
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "16px",
  color: "var(--color-black)",
});

export const Description = styled("div", {
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "19px",
  color: "var(--color-gray-600)",
  fontFamily: "Nunito",
});
