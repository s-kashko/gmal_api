import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";
import { selectLoading, selectMessages } from "../../Redux/rowData/selectors";

import Preloader from "../Preloader";
import MessagesTable from "../MessagesTable";
import Search from "../Search";
import ContentHeader from "./ContentHeader";
import Options from "../Search/Options";

const ContentWrapper = styled.main`
  display: flex;
  justify-content: center;
  min-height: 60vh;
`;

const AlignWrapper = styled.div`
  display: flex;
  width: ${MAIN_CONTAINER_WIDTH};
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 27%);
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
  border-left: 1px solid #e0e4ed;
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

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f4f8;
  height: 50px;
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
          <ContentHeader />
          <SearchPanel>
            <Search />
            <Options />
          </SearchPanel>
          {loading ? (
            <Preloader loaderStyles={loaderStyles} />
          ) : (
            <MessagesTable messages={messages} openModal={openModal} />
          )}
        </Content>
      </AlignWrapper>
    </ContentWrapper>
  );
};

export default MainContent;
