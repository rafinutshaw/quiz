import { styled } from "@stitches/react";

export const ButtonElement = styled("button", {
  minHeight: 50,
  fontFamily: "Ubuntu",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: 5,
  color: "Black",
  position: "relative",
  borderWidth: 0,
  cursor: "pointer",

  variants: {
    type: {
      primary: {
        background:
          "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
        color: "var(--color-white)",
      },
      outlined: {
        background:
          "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",

        "&:before": {
          content: "",
          position: "absolute",
          inset: 0,
          padding: 1,
          borderRadius: 5,
          background:
            "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          MaskComposite: "exclude",
        },
      },
    },
  },
});
