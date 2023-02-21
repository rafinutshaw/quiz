import { styled } from "@stitches/react";

export const PointContainer = styled("div", {
  padding: "0 7px 14px 7px",
});

export const LabelContainer = styled("div", {
  cursor: "pointer",
});

export const LabelWrapper = styled("div", {
  display: "flex",
  overflow: "auto",
  position: "absolute",
  width: 327,
  backgroundColor: "var(--color-white)",

  "&::-webkit-scrollbar": {
    height: "0px",
  },
});

export const ContentWrapper = styled("div", {
  paddingTop: 72,

  variants: {
    active: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const Divider = styled("div", {
  height: 2,

  variants: {
    active: {
      false: {
        backgroundColor: "var(--color-gray-300)",
        opacity: 0.5,
      },
      true: {
        background: "linear-gradient(#3550DC 0%, #27E9F7 100%);",
      },
    },
  },
});
