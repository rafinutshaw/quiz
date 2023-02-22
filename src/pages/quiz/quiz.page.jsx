import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ButtonComponent from "../../components/button/button.component";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import PaginatorComponent from "../../components/paginator/paginator.component";
import QuestionComponent from "../../components/question/question.component";
import TabsComponent from "../../components/tabs/tabs.component";
import { questions } from "./fakedata";
import { PaginatorWrapper, Space } from "./quiz.styles";

export default function QuizPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const methods = useForm({});
  const { handleSubmit, values } = methods;
  console.log(values);
  const getTabs = () => {
    return questions.map((item, index) => {
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

  return (
    <PageContentComponent>
      <Space />
      <PageBodyComponent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(console.log)}>
            <TabsComponent
              type="regular"
              tabs={getTabs()}
              activeIndex={activeIndex}
              onTabChange={setActiveIndex}
            ></TabsComponent>
            <PaginatorWrapper>
              <PaginatorComponent
                totalPages={questions.length}
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
