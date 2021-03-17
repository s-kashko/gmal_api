import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";
import { selectLabel } from "../../Redux/rowData/selectors";
import { getLabeledMessages } from "../../Redux/rowData/thunks";

const HeaderNavWrapper = styled.nav`
  height: 40px;
  background-color: #565d6e;
  display: flex;
`;

const HeaderNavContent = styled.div`
  width: ${MAIN_CONTAINER_WIDTH};
  color: white;
  margin: 0 auto;
`;

const NavBlock = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  border-top: 5px solid
    ${({ selected }) => (selected ? "white" : "transparent")};
  margin-right: 19px;
  padding: 5px 5px 10px 0;
  color: white;
  cursor: pointer;
  font: 14px Arial, sans-serif;

  &:hover {
    color: #ccced3;
    text-decoration: underline;
    border-top: 5px solid
      ${({ selected }) => (selected ? "white" : "transparent")};
  }
`;

const messageLabels = ["INBOX", "DRAFT", "TRASH", "IMPORTANT", "SPAM"];

const HeaderNavigation = () => {
  const selectedLabel = useSelector((state) => selectLabel(state));
  const dispatch = useDispatch();

  return (
    <HeaderNavWrapper>
      <HeaderNavContent>
        <NavBlock>
          {messageLabels.map((label) => (
            <NavItem
              key={label}
              onClick={() => dispatch(getLabeledMessages(label))}
              selected={selectedLabel === label}
            >
              {label}
            </NavItem>
          ))}
        </NavBlock>
      </HeaderNavContent>
    </HeaderNavWrapper>
  );
};

export default HeaderNavigation;
