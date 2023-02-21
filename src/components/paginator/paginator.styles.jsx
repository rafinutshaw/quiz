import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
});

export const RightArrow = styled("div", {
  rotate: "180deg",
});

export const ActionButton = styled("button", {
  width: 50,
  padding: 0,
  backgroundColor: "transparent",
  borderWidth: 0,
  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
  },
});
