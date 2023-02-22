import React, { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { QuizContext } from "../../app-context/quiz-context";
import PointComponent from "../point/point.component";
import {
  Label,
  OptionContainer,
  OptionLabel,
  OptionsWrapper,
  QuestionLabel,
  QuestionWrapper,
} from "./question.styles";

export default function QuestionComponent({ question, options, id }) {
  const { register, watch } = useFormContext();
  const quizContext = useContext(QuizContext);
  const { quizInfo, setQuizInfo } = quizContext;
  const values = watch();
  console.log(values);
  console.log(quizInfo);
  useEffect(() => {
    setQuizInfo(values);
  }, [watch]);

  return (
    <QuestionWrapper>
      <QuestionLabel>{question}</QuestionLabel>
      <OptionsWrapper>
        {options.map((item, index) => (
          <OptionContainer>
            <input
              type="radio"
              value={item.ans}
              id={`${index}${question}`}
              name={question}
              {...register(id.toString())}
              onChange={(e) => {
                const updatedData = { ...values };
                updatedData[id.toString()] = e.target.value;
                setQuizInfo(updatedData);
                return register(id.toString()).onChange(e);
              }}
            />
            <Label for={`${index}${question}`}>
              <PointComponent
                color={values[id] === item.ans ? "primary" : "gray"}
              >
                {String.fromCharCode(65 + index)}
              </PointComponent>
              <OptionLabel selected={values[id] === item.ans}>
                {item.ans}
              </OptionLabel>
            </Label>
          </OptionContainer>
        ))}
      </OptionsWrapper>
    </QuestionWrapper>
  );
}
