import React from "react";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../constants";

import Preloader from "../Preloader/Preloader";

const ContentWrapper = styled.main`
  background-color: #f2f4f8;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const AlignWrapper = styled.div`
  display: flex;
  width: ${MAIN_CONTAINER_WIDTH};
`;

const LeftMenu = styled.aside`
  width: 171px;
  background-color: #fcfdfe;
`;

const Content = styled.div`
  background-color: #ffffff;
  flex-grow: 1;
`;

const loaderStyles = {
  height: "10px",
  fill: "#565d6e",
  position: "absolute",
  top: "30%",
  left: "calc(50% - 10px)",
};
const MainContent = ({ loading }) => {
  return (
    <ContentWrapper>
      <AlignWrapper>
        <LeftMenu>LeftMenu</LeftMenu>
        <Content>
          {loading ? <Preloader {...loaderStyles} /> : "Content"}
        </Content>
      </AlignWrapper>
    </ContentWrapper>
  );
};

export default MainContent;
