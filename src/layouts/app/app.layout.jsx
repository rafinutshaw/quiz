import React from "react";
import { Outlet } from "react-router-dom";
import AppbarComponent from "../../components/appbar/appbar.component";
import { AppContainer, ChildrenContainer } from "./app.styles";

export default function AppLayout() {
  return (
    <AppContainer>
      <AppbarComponent />
      <ChildrenContainer>
        <Outlet />
      </ChildrenContainer>
    </AppContainer>
  );
}
