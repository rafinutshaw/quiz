import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../app-context/quiz-context";
import ButtonComponent from "../../components/button/button.component";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import PaginatorComponent from "../../components/paginator/paginator.component";
import QuestionComponent from "../../components/question/question.component";
import TabsComponent from "../../components/tabs/tabs.component";
import { QUESTIONS } from "./fakedata";
import { PaginatorWrapper, Space } from "./quiz.styles";

export default function QuizPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const methods = useForm({});
  const navigate = useNavigate();
  const { handleSubmit } = methods;
  const quizContext = useContext(QuizContext);
  const { clearQuizInfo } = quizContext;

  useEffect(() => {
    clearQuizInfo();
  }, []);

  const getTabs = () => {
    return QUESTIONS.map((item) => {
      return {
        label: item.id,
        content: (
          <QuestionComponent
            question={item.question}
            options={item.answers}
            id={item.id}
          />
        ),
      };
    });
  };

  const onSubmit = () => {
    navigate(`/quiz-complete`);
  };

  return (
    <PageContentComponent>
      <Space />
      <PageBodyComponent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TabsComponent
              type="regular"
              tabs={getTabs()}
              activeIndex={activeIndex}
              onTabChange={setActiveIndex}
            ></TabsComponent>
            <PaginatorWrapper>
              <PaginatorComponent
                totalPages={QUESTIONS.length}
                currentPage={activeIndex}
                onChange={(page) => setActiveIndex(page)}
              >
                <ButtonComponent type={"outlined"}>Submit</ButtonComponent>
              </PaginatorComponent>
            </PaginatorWrapper>
          </form>
        </FormProvider>
      </PageBodyComponent>
    </PageContentComponent>
  );
}
