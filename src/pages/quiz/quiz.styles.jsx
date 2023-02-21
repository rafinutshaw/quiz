import { styled } from "@stitches/react";

export const Space = styled("div", {
  height: 8,
});

export const PaginatorWrapper = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "var(--color-white)",
  zIndex: 99,
  padding: "10px 24px 40px 24px",
});

export const PointContainer = styled("div", {
  padding: "0 7px 14px 7px",
});
