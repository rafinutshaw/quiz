import React from "react";
import ListItemComponent from "../../components/list-item/list-item.component";
import PageBodyComponent from "../../components/page-body/page-body.component";
import PageContentComponent from "../../components/page-content/page-content.component";
import QuizHeaderComponent from "../../components/quiz-header/quiz-header.component";
import ClockIcon from "../../icons/clock.icon";
import FileIcon from "../../icons/file.icon";
import StarOutlinedIcon from "../../icons/star-outlined";
import {
  ContentInfo,
  Instruction,
  InstructionsHeader,
  SectionHeader,
} from "./quiz-details.styles";

export default function QuizDetailsPage() {
  return (
    <PageContentComponent>
      <QuizHeaderComponent />
      <PageBodyComponent>
        <ContentInfo>
          <SectionHeader>Brief explanation about this quiz</SectionHeader>
          <ListItemComponent
            leadingIcon={<FileIcon />}
            title={"10 Question"}
            description={"10 point for a correct answer"}
          />
          <ListItemComponent
            leadingIcon={<ClockIcon />}
            title={"1 hour 15 min"}
            description={"Total duration of the quiz"}
          />
          <ListItemComponent
            leadingIcon={<StarOutlinedIcon />}
            title={"Win 10 star"}
            description={"Answer all questions correctly"}
          />
        </ContentInfo>
        <ContentInfo>
          <InstructionsHeader>
            Please read the text below carefully so you can understand it
          </InstructionsHeader>

          <Instruction>
            10 point awarded for a correct answer and no marks for a incorrect
            answer
          </Instruction>

          <Instruction>
            Tap on options to select the correct answer{" "}
          </Instruction>

          <Instruction>
            Tap on the bookmark icon to save interesting questions{" "}
          </Instruction>

          <Instruction>
            Click submit if you are sure you want to complete all the quizzes{" "}
          </Instruction>
        </ContentInfo>
      </PageBodyComponent>
    </PageContentComponent>
  );
}
