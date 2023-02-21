import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        <ButtonComponent
          onClick={() => navigate("/quiz")}
          type={"dark"}
          size={"sm"}
        >
          Continue Quiz
        </ButtonComponent>
      </RightContent>
    </Container>
  );
}
