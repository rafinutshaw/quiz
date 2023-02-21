import React from "react";
import StarGoldenIcon from "../../icons/star-golden.icon";
import {
  Container,
  Description,
  LeftPanel,
  Rating,
  RightPanel,
  Title,
} from "./quiz-header.styles";

export default function QuizHeaderComponent({
  title = "UI UX Design Quiz",
  description = "Get 100 Points",
  rating = 4.8,
}) {
  return (
    <Container>
      <LeftPanel>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftPanel>
      <RightPanel>
        <StarGoldenIcon />
        <Rating>{rating}</Rating>
      </RightPanel>
    </Container>
  );
}
