import React from "react";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";

const HeaderNavWrapper = styled.nav`
  height: 40px;
  background-color: #565d6e;
  display: flex;
  justify-content: center;
`;

const HeaderNavContent = styled.div`
  width: ${MAIN_CONTAINER_WIDTH};
  color: white;
`;

const HeaderNavigation = () => {
  return (
    <HeaderNavWrapper>
      <HeaderNavContent>Header Navigation</HeaderNavContent>
    </HeaderNavWrapper>
  );
};

export default HeaderNavigation;
