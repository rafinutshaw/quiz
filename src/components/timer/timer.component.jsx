import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../app-context/quiz-context";
import TimerIcon from "../../icons/timer.icon";
import { AppUtils } from "../../utils/app.utils";
import PillComponent from "../pill/pill.component";
import { Container, TimeContainer } from "./timer.styles";

export default function TimerComponent({ duration, onFinished }) {
  const [count, setCount] = useState(duration);
  const quizContext = useContext(QuizContext);
  const { setTimeRemaining } = quizContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 0) {
        if (onFinished) onFinished();
        clearTimeout(timer);
      } else {
        setTimeRemaining(count);
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count, onFinished]);

  return (
    <PillComponent>
      <Container>
        <TimerIcon />
        <TimeContainer>{AppUtils.formatTime(count)}</TimeContainer>
      </Container>
    </PillComponent>
  );
}
