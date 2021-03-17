import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const AddItemButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 65px;
  color: #99a1b3;
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }
`;

const OptionsBlock = styled.div`
  display: flex;
  align-items: center;
`;

const PlusIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  font-size: 11px;
`;

const SlidersIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  font-size: 20px;
  color: #99a1b3;
`;

const SlidersButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 15px;

  &:hover {
    opacity: 0.7;
  }
`;

const Span = styled.span`
  @media (max-width: 720px) {
    display: none;
  }
`;

const Options = () => (
  <OptionsBlock>
    <AddItemButton>
      <PlusIcon icon={faPlus} />
      <Span>New Item</Span>
    </AddItemButton>
    <SlidersButton>
      <SlidersIcon icon={faSlidersH} />
    </SlidersButton>
  </OptionsBlock>
);

export default Options;
