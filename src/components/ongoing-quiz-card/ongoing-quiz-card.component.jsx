import React from "react";
import ClockIcon from "../../icons/clock.icon";
import FileIcon from "../../icons/file.icon";
import TrashIcon from "../../icons/trash.icon";
import ButtonComponent from "../button/button.component";
import {
  Container,
  DeleteAction,
  ImageContainer,
  InfoContainer,
  InfoItem,
  InfoWrapper,
  RightContent,
  Title,
} from "./ongoing-quiz-card.styles";

export default function OngoingQuizCardComponent() {
  return (
    <Container>
      <ImageContainer />
      <RightContent>
        <InfoWrapper>
          <InfoContainer>
            <Title>UI UX Design</Title>
            <InfoItem>
              <FileIcon size={16} />
              10 Questions
            </InfoItem>
            <InfoItem>
              <ClockIcon size={16} />1 hour 15 min
            </InfoItem>
          </InfoContainer>
          <DeleteAction>
            <TrashIcon />
          </DeleteAction>
        </InfoWrapper>
        <ButtonComponent type={"black"} size={"sm"}>
          yoyo
        </ButtonComponent>
      </RightContent>
    </Container>
  );
}
