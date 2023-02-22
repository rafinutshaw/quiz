import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [quizInfo, setQuizInfo] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  const clearQuizInfo = () => {
    setQuizInfo(null);
  };

  return (
    <QuizContext.Provider
      value={{
        quizInfo,
        setQuizInfo,
        clearQuizInfo,
        timeRemaining,
        setTimeRemaining,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
