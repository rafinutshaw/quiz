import React, { useEffect } from "react";
import PointComponent from "../point/point.component";
import {
  ContentWrapper,
  Divider,
  LabelContainer,
  LabelWrapper,
  PointContainer,
} from "./tabs.styles";

export default function TabsComponent({ tabs, activeIndex, onTabChange }) {
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
  }, [activeIndex]);

  return (
    <>
      <LabelWrapper>
        {tabs.map((item, index) => {
          return (
            <LabelContainer
              id={`${item.label}${index}`}
              onClick={() => onLabelClick(`${item.label}${index}`, index)}
            >
              <PointContainer active={index === activeIndex}>
                <PointComponent
                  color={index === activeIndex ? "primary" : "gray"}
                  size="sm"
                >
                  {item.label}
                </PointComponent>
              </PointContainer>
              <Divider active={index === activeIndex} />
            </LabelContainer>
          );
        })}
      </LabelWrapper>
      {tabs.map((item) => {
        return (
          <ContentWrapper active={item.active === true}>
            {item.content}
          </ContentWrapper>
        );
      })}
    </>
  );
}
