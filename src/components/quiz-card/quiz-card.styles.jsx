import { styled } from "@stitches/react";

export const Container = styled("div", {
  boxShadow: "10px 24px 54px rgba(51, 51, 51, 0.1)",
  borderRadius: 5,
  backgroundColor: "var(--color-white)",
  padding: "12px 16px 12px 23px",
  height: 96,
  display: "flex",
  gap: 16,
  alignItems: "center",
});

export const ImageContainer = styled("div", {
  borderRadius: 3,
  backgroundSize: "contain",
  height: 72,
  width: 72,
  backgroundColor: "blue",
});

export const InfoContainer = styled("div", {
  flexGrow: 1,
});

export const Title = styled("div", {
  fontFamily: "Ubuntu",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "18px",
  background: "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  paddingBottom: 4,
});

export const InfoItem = styled("div", {
  display: "flex",
  gap: 4,
  fontFamily: "Nunito",
  fontSize: 14,
  lineHeight: "19px",
  color: "var(--color-gray-600)",
  marginTop: 4,
});

export const RatingContainer = styled("div", {
  display: "flex",
  gap: 4,
  fontFamily: "Nunito",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "22px",
  background: "linear-gradient(122.76deg, #3550DC -35.72%, #27E9F7 172.73%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
