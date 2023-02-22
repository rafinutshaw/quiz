import React, { useContext } from "react";
import { QuizContext } from "../../app-context/quiz-context";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import { QUESTIONS } from "../quiz/fakedata";
import { ExamComplete, ExamScore, Space, Thanks } from "./quiz-complete.styles";

export default function QuizCompletePage() {
  const quizContext = useContext(QuizContext);
  const { quizInfo } = quizContext;

  const getScore = () => {
    if (!quizInfo) return 0;
    let correct = 0;
    QUESTIONS.forEach((item) => {
      for (let i = 0; i < item.answers.length; i++) {
        if (item.answers[i].isCorrect) {
          if (quizInfo[item.id] === item.answers[i].ans) correct++;
          break;
        }
      }
    });
    return Math.floor((correct / QUESTIONS.length) * 100);
  };

  return (
    <PageContentComponent>
      <Space />
      <PageBodyComponent>
        <ExamComplete>Exam Complete</ExamComplete>
        <ExamScore>Your score: {getScore()}%</ExamScore>
        <Thanks>Thanks for participating!</Thanks>
      </PageBodyComponent>
    </PageContentComponent>
  );
}
