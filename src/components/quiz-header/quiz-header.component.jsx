import React from "react";
import { useSearchParams } from "react-router-dom";
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
  description = "Get 100 Points",
  rating = 4.8,
}) {
  const [searchParams] = useSearchParams();

  return (
    <Container>
      <LeftPanel>
        <Title>{searchParams.get("title")}</Title>
        <Description>{description}</Description>
      </LeftPanel>
      <RightPanel>
        <StarGoldenIcon />
        <Rating>{rating}</Rating>
      </RightPanel>
    </Container>
  );
}
