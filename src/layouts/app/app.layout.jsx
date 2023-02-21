import React from "react";
import AppbarComponent from "../../components/appbar/appbar.component";
import { AppContainer, ChildrenContainer } from "./app.styles";

export default function AppLayout({ children }) {
  return (
    <AppContainer>
      <AppbarComponent />
      <ChildrenContainer>{children}</ChildrenContainer>
    </AppContainer>
  );
}
