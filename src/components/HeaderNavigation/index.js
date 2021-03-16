import React, { useState } from "react";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";

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

const messageLabels = ["Inbox", "Unread", "Important", "Spam"];

const HeaderNavigation = () => {
  const [selectedLabel, selectLabel] = useState("Inbox");
  return (
    <HeaderNavWrapper>
      <HeaderNavContent>
        <NavBlock>
          {messageLabels.map((label) => (
            <NavItem
              key={label}
              onClick={() => selectLabel(label)}
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
