import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppbarContext } from "../../app-context/appbar-context";
import ButtonComponent from "../../components/button/button.component";
import HomeHeaderComponent from "../../components/home-header/home-header.component";
import OngoingQuizCardComponent from "../../components/ongoing-quiz-card/ongoing-quiz-card.component";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import QuizCardComponent from "../../components/quiz-card/quiz-card.component";
import TabsComponent from "../../components/tabs/tabs.component";
import {
  ContinueSectionHeader,
  FloatingBottomButton,
  QuizList,
} from "./home.styles";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedExam, setSelectedExam] = useState("");
  const { setTitle } = useContext(AppbarContext);
  const navigate = useNavigate();

  const tabs = [
    {
      label: "Computer",
      content: (
        <QuizList>
          <QuizCardComponent
            title={"UI UX Exam"}
            onSelect={setSelectedExam}
            isActive={selectedExam === "UI UX Exam"}
          />
          <QuizCardComponent
            title={"Computer Exam"}
            onSelect={setSelectedExam}
            isActive={selectedExam === "Computer Exam"}
          />
        </QuizList>
      ),
      active: true,
    },
    {
      label: "Math",
      content: (
        <QuizList>
          <QuizCardComponent
            title={"Math Exam"}
            onSelect={setSelectedExam}
            isActive={selectedExam === "Math Exam"}
          />
        </QuizList>
      ),
    },
  ];

  return (
    <PageContentComponent>
      <HomeHeaderComponent />
      <PageBodyComponent>
        <TabsComponent
          type="compact"
          tabs={tabs}
          activeIndex={activeIndex}
          onTabChange={setActiveIndex}
        ></TabsComponent>
        <ContinueSectionHeader>Continue Quiz</ContinueSectionHeader>
        <OngoingQuizCardComponent
          title={"Chemistry Exam"}
          onSelect={setSelectedExam}
        />
        <FloatingBottomButton>
          <ButtonComponent
            onClick={() => {
              setTitle(selectedExam);
              navigate(`/quiz?title=${selectedExam}`);
            }}
            type={"primary"}
          >
            Start Quiz
          </ButtonComponent>
        </FloatingBottomButton>
      </PageBodyComponent>
    </PageContentComponent>
  );
}
