import React from "react";
import PointComponent from "../point/point.component";
import {
  OptionContainer,
  OptionLabel,
  OptionsWrapper,
  QuestionLabel,
  QuestionWrapper,
} from "./question.styles";

export default function QuestionComponent({ question, options }) {
  return (
    <QuestionWrapper>
      <QuestionLabel>{question}</QuestionLabel>
      <OptionsWrapper>
        {options.map((item, index) => (
          <OptionContainer>
            <PointComponent color={"gray"}>
              {String.fromCharCode(65 + index)}
            </PointComponent>
            <OptionLabel>{item.ans}</OptionLabel>
          </OptionContainer>
        ))}
      </OptionsWrapper>
    </QuestionWrapper>
  );
}
