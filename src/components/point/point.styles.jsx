import { styled } from "@stitches/react";

export const Container = styled("div", {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--color-white)",
  fontFamily: "Ubuntu",
  fontWeight: 500,

  variants: {
    color: {
      primary: {
        background:
          "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
      },
      gray: {
        backgroundColor: "var(--color-gray-300)",
      },
      black: {
        backgroundColor: "var(--color-black)",
      },
    },

    size: {
      sm: {
        minHeight: 32,
        minWidth: 32,
        fontSize: 16,
        lineHeight: "18px",
      },
      md: {
        minHeight: 40,
        minWidth: 40,
        fontSize: 18,
        lineHeight: "21px",
      },
      lg: {
        minHeight: 50,
        minWidth: 50,
      },
    },
  },
});
