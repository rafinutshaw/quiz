import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const tabs = [
    {
      label: "5",
      content: (
        <QuizList>
          <QuizCardComponent />
          <QuizCardComponent />
        </QuizList>
      ),
      active: true,
    },
    {
      label: "5",
      content: (
        <QuizList>
          <QuizCardComponent />
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

        <OngoingQuizCardComponent></OngoingQuizCardComponent>
        <FloatingBottomButton>
          <ButtonComponent onClick={() => navigate("/quiz")} type={"primary"}>
            Start Quiz
          </ButtonComponent>
        </FloatingBottomButton>
      </PageBodyComponent>
    </PageContentComponent>
  );
}
