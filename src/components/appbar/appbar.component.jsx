import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeftArrowIcon from "../../icons/left-arrow.icon";
import MenuIcon from "../../icons/menu.icon";
import ProfileComponent from "../profile/profile.component";
import TimerComponent from "../timer/timer.component";
import {
  Container,
  IconContainer,
  PageInfo,
  TitleContainer,
} from "./appbar.styles";

export default function AppbarComponent({ title = "tete" }) {
  let location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <PageInfo>
        {location.pathname === "/" && <MenuIcon />}
        {location.pathname !== "/" && (
          <IconContainer onClick={handleClick}>
            <LeftArrowIcon />
          </IconContainer>
        )}

        {location.pathname !== "/" && <TitleContainer>{title}</TitleContainer>}
      </PageInfo>
      {location.pathname !== "/quiz" && <ProfileComponent />}
      {location.pathname === "/quiz" && <TimerComponent duration={10} />}
    </Container>
  );
}
