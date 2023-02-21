import { styled } from "@stitches/react";

export const Container = styled("div", {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  width: 40,

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
        height: 32,
        width: 32,
      },
      md: {
        height: 40,
        width: 40,
      },
      lg: {
        height: 50,
        width: 50,
      },
    },
  },
});
