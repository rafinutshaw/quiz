import React from "react";
import PointComponent from "../point/point.component";
import {
  OptionContainer,
  OptionLabel,
  OptionsWrapper,
  QuestionLabel,
  QuestionWrapper,
} from "./question.styles";

export default function QuestionComponent() {
  return (
    <QuestionWrapper>
      <QuestionLabel>What is the meaning of UI UX Design ?</QuestionLabel>
      <OptionsWrapper>
        <OptionContainer>
          <PointComponent color={"gray"}>A</PointComponent>
          <OptionLabel>User Interfoce and User Experience</OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <PointComponent color={"gray"}>A</PointComponent>
          <OptionLabel>User Interfoce and User Experience</OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <PointComponent color={"gray"}>A</PointComponent>
          <OptionLabel>User Interfoce and User Experience</OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <PointComponent color={"gray"}>A</PointComponent>
          <OptionLabel>User Interfoce and User Experience</OptionLabel>
        </OptionContainer>
      </OptionsWrapper>
    </QuestionWrapper>
  );
}
