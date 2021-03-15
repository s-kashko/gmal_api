import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";
import { selectLoading, selectMessages } from "../../Redux/rowData/selectors";

import Preloader from "../Preloader";
import MessagesTable from "../MessagesTable";
import Search from "../Search";

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
  flex-shrink: 0;
  width: 171px;
  background-color: #fcfdfe;
`;

const Content = styled.div`
  position: relative;
  background-color: #ffffff;
  flex-grow: 1;
`;

const loaderStyles = css`
  height: 15px;
  position: absolute;
  top: 15%;
  left: calc(50% - 27px);

  circle {
    fill: #565d6e;
  }
`;

const MainContent = (props) => {
  const { openModal } = props;

  const loading = useSelector((state) => selectLoading(state));
  const messages = useSelector((state) => selectMessages(state));

  return (
    <ContentWrapper>
      <AlignWrapper>
        <LeftMenu>LeftMenu</LeftMenu>
        <Content>
          <Search />
          {loading ? <Preloader loaderStyles={loaderStyles} /> : <MessagesTable messages={messages} openModal={openModal} />}
        </Content>
      </AlignWrapper>
    </ContentWrapper>
  );
};

export default MainContent;
