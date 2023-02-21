import React from "react";
import ClockIcon from "../../icons/clock.icon";
import FileIcon from "../../icons/file.icon";
import StarGoldenIcon from "../../icons/star-golden.icon";
import {
  Container,
  ImageContainer,
  InfoContainer,
  InfoItem,
  RatingContainer,
  Title,
} from "./quiz-card.styles";

export default function QuizCardComponent() {
  return (
    <Container>
      <ImageContainer />
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
      <RatingContainer>
        <StarGoldenIcon size={20} />
        4.6
      </RatingContainer>
    </Container>
  );
}
