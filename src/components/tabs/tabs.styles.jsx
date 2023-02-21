import { styled } from "@stitches/react";

export const PointContainer = styled("div", {
  padding: "0 7px 14px 7px",
});

export const LabelContainer = styled("div", {
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
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
    compact: {
      true: {
        paddingTop: 42,
      },
    },
  },
});

export const LabelText = styled("div", {
  minWidth: 60,
  fontFamily: "Nunito",
  fontSize: 14,
  lineHeight: "19px",

  variants: {
    active: {
      true: {
        background:
          "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: 5,
      },
      false: {
        color: "var(--color-gray-600)",
        marginBottom: 6,
      },
    },
  },
});

export const Divider = styled("div", {
  height: 2,
  width: "100%",

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
    compact: {
      true: {
        width: 40,
        height: 1,
      },
    },
  },
});
