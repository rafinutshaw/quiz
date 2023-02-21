import React, { useEffect } from "react";
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
  const scrollLabelToView = (elementID) => {
    const element = document.getElementById(elementID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onLabelClick = (elementID, index) => {
    scrollLabelToView(elementID);
    onTabChange(index);
  };

  useEffect(() => {
    scrollLabelToView(`${tabs[activeIndex].label}${activeIndex}`);
  }, [tabs, activeIndex]);

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
              id={`${item.label}${index}`}
              onClick={() => onLabelClick(`${item.label}${index}`, index)}
            >
              {getLabel(index === activeIndex, item.label)}
              {/* <PointContainer active={index === activeIndex}>
                <PointComponent
                  color={index === activeIndex ? "primary" : "gray"}
                  size="sm"
                >
                  {item.label}
                </PointComponent>
              </PointContainer>
              <Divider active={index === activeIndex} /> */}
            </LabelContainer>
          );
        })}
      </LabelWrapper>
      {tabs.map((item, index) => {
        return (
          <ContentWrapper
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
