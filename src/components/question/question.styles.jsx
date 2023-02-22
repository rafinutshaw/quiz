import { styled } from "@stitches/react";

export const QuestionWrapper = styled("div", {});

export const QuestionLabel = styled("div", {
  fontFamily: "Ubuntu",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "18px",
  marginBottom: 27,
});

export const Label = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const OptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  input: {
    visibility: "hidden",
    position: "absolute",
  },
  "input + label > div": {
    cursor: "pointer",
  },
});

export const OptionLabel = styled("div", {
  fontFamily: "Ubuntu",
  fontSize: 14,
  lineHeight: "16px",

  variants: {
    selected: {
      true: {
        background:
          "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
});

export const OptionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
