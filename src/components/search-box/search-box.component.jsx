import React from "react";
import FilterIcon from "../../icons/filter.icon";
import SearchIcon from "../../icons/search.icon";
import {
  Container,
  Input,
  LeadingIcon,
  TrailingIcon,
} from "./search-box.styles";

export default function SearchBoxComponent() {
  return (
    <Container>
      <LeadingIcon>
        <SearchIcon />
      </LeadingIcon>
      <Input placeholder="Search" />
      <TrailingIcon>
        <FilterIcon />
      </TrailingIcon>
    </Container>
  );
}
