import React, { useState } from "react";
import HomeHeaderComponent from "../../components/home-header/home-header.component";
import OngoingQuizCardComponent from "../../components/ongoing-quiz-card/ongoing-quiz-card.component";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import QuizCardComponent from "../../components/quiz-card/quiz-card.component";
import TabsComponent from "../../components/tabs/tabs.component";
import { QuizList } from "./home.styles";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

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
          tabs={tabs}
          activeIndex={activeIndex}
          onTabChange={setActiveIndex}
        ></TabsComponent>
        <OngoingQuizCardComponent></OngoingQuizCardComponent>
        {/* <OngoingQuizCardComponent></OngoingQuizCardComponent> */}
      </PageBodyComponent>
    </PageContentComponent>
  );
}
