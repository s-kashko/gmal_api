import React from "react";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../constants";

const HeaderContainer = styled.header`
  height: 115px;
  background-color: #333;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: ${MAIN_CONTAINER_WIDTH};
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>Header</HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
