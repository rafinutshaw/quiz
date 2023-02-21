import React from "react";
import LeftIcon from "../../icons/left.icon";
import PointComponent from "../point/point.component";
import { ActionButton, Container, RightArrow } from "./paginator.styles";

export default function PaginatorComponent({
  children,
  currentPage,
  totalPages,
  onChange,
}) {
  const onAction = (nextPage) => {
    if (nextPage < totalPages) onChange(nextPage);
  };

  return (
    <Container>
      <ActionButton
        disabled={currentPage === 0}
        onClick={() => onAction(currentPage - 1)}
      >
        <PointComponent
          size="lg"
          color={currentPage === 0 ? "gray" : "primary"}
        >
          <LeftIcon />
        </PointComponent>
      </ActionButton>
      {children}
      <ActionButton
        disabled={currentPage + 1 === totalPages}
        onClick={() => onAction(currentPage + 1)}
      >
        <PointComponent
          size="lg"
          color={currentPage + 1 === totalPages ? "gray" : "primary"}
        >
          <RightArrow>
            <LeftIcon />
          </RightArrow>
        </PointComponent>
      </ActionButton>
    </Container>
  );
}
