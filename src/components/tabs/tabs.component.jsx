import React from "react";
import PointComponent from "../point/point.component";
import {
  ContentWrapper,
  Divider,
  LabelContainer,
  LabelText,
  LabelWrapper,
  PointContainer,
} from "./tabs.styles";

export default function TabsComponent({
  tabs,
  activeIndex,
  onTabChange,
  type = "compact",
}) {
  const onLabelClick = (index) => {
    onTabChange(index);
  };

  const getLabel = (isActive, label) => {
    if (type === "compact") {
      return (
        <>
          <LabelText active={isActive}>{label}</LabelText>
          {isActive && <Divider compact={true} active={isActive} />}
        </>
      );
    }
    return (
      <>
        <PointContainer active={isActive}>
          <PointComponent color={isActive ? "primary" : "gray"} size="sm">
            {label}
          </PointComponent>
        </PointContainer>
        <Divider active={isActive} />
      </>
    );
  };

  return (
    <>
      <LabelWrapper>
        {tabs.map((item, index) => {
          return (
            <LabelContainer
              key={item.label}
              id={`${item.label}${index}`}
              onClick={() => onLabelClick(`${item.label}${index}`, index)}
            >
              {getLabel(index === activeIndex, item.label)}
            </LabelContainer>
          );
        })}
      </LabelWrapper>
      {tabs.map((item, index) => {
        return (
          <ContentWrapper
            key={item.label}
            compact={type === "compact"}
            active={index === activeIndex}
          >
            {item.content}
          </ContentWrapper>
        );
      })}
    </>
  );
}
