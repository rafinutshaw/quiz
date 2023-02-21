import { styled } from "@stitches/react";

export const Container = styled("div", {
  height: "100%",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  backgroundColor: "var(--color-white)",
  paddingTop: 16,
  display: "flex",
  flexDirection: "column",
});

export const Indicator = styled("div", {
  height: 4,
  width: 48,
  background: "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
  borderRadius: 10,
  margin: "auto",
  marginBottom: 24,
});

export const ChildrenContainer = styled("div", {
  flex: "1 1 auto",
  overflowY: "auto",
  height: 0,
  padding: "0px 24px",
});
