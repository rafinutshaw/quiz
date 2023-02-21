import React from "react";
import { Container } from "./profile.styles";

export default function ProfileComponent({
  url = "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
}) {
  return <Container css={{ backgroundImage: `url("${url}")` }} />;
}
