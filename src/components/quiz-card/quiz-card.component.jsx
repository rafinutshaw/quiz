import React from "react";
import { Link } from "react-router-dom";
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

export default function QuizCardComponent({
  isActive = false,
  onSelect,
  title,
}) {
  return (
    <Container active={isActive} onClick={() => onSelect(title)}>
      <ImageContainer />
      <InfoContainer>
        <Link to={`/quiz-details?title=${title}`}>
          <Title>{title}</Title>
        </Link>
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
