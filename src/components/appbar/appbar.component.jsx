import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LeftArrowIcon from "../../icons/left-arrow.icon";
import MenuIcon from "../../icons/menu.icon";
import ProfileComponent from "../profile/profile.component";
import TimerComponent from "../timer/timer.component";
import {
  Container,
  IconContainer,
  Logout,
  PageInfo,
  TitleContainer,
} from "./appbar.styles";

export default function AppbarComponent() {
  let location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { logout } = useAuth0();

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

        {location.pathname === "/quiz" && (
          <TitleContainer>{searchParams.get("title")}</TitleContainer>
        )}
      </PageInfo>
      {location.pathname !== "/quiz" && (
        <Logout onClick={logout}>
          <ProfileComponent />
        </Logout>
      )}
      {location.pathname === "/quiz" && (
        <TimerComponent
          duration={1000}
          onFinished={() => navigate("/quiz-complete")}
        />
      )}
    </Container>
  );
}
