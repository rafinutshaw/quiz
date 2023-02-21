import React, { useEffect, useState } from "react";
import TimerIcon from "../../icons/timer.icon";
import { AppUtils } from "../../utils/app.utils";
import PillComponent from "../pill/pill.component";
import { Container, TimeContainer } from "./timer.styles";

export default function TimerComponent({ duration, onFinished }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count >= duration) {
        onFinished();
        clearTimeout(timer);
      } else {
        setCount(count + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <PillComponent>
      <Container>
        <TimerIcon />
        <TimeContainer>{AppUtils.formatTime(count)}</TimeContainer>
      </Container>
    </PillComponent>
  );
}
