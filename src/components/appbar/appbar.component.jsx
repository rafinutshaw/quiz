import React from "react";
import MenuIcon from "../../icons/menu.icon";
import ProfileComponent from "../profile/profile.component";
import { Container, PageInfo, TitleContainer } from "./appbar.styles";

export default function AppbarComponent({ title = "tete" }) {
  return (
    <Container>
      <PageInfo>
        <MenuIcon />
        <TitleContainer>{title}</TitleContainer>
      </PageInfo>
      <ProfileComponent />
      {/* <TimerComponent duration={10} /> */}
    </Container>
  );
}
