import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { MAIN_CONTAINER_WIDTH } from "../../constants";
import { selectMessages } from "../../Redux/rowData/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

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
  background-color: #ffffff;
  flex-grow: 1;
  border-left: 1px solid #e0e4ed;
`;

const SearchPanel = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f4f8;
  height: 50px;
`;

const Slider = styled.div`
  margin: 20px auto 30px;
  text-align: center;
`;

const SliderButton = styled.button`
  display: inline-block;
  border: 1px solid #99a1b3;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  background-color: transparent;
  padding: 9px 15px 9px 10px;
  margin: 0 5px;
  color: #2d313d;

  &:hover {
    background-color: #f2f4f8;
  }
  &:focus {
    background-color: #e6e6e6;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
  }
`;

const MainContent = (props) => {
  const { openModal } = props;

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
          <MessagesTable messages={messages} openModal={openModal} />
          <Slider>
            <SliderButton>
              <FontAwesomeIcon icon={faChevronLeft} /> Previous
            </SliderButton>
            <SliderButton>
              Next <FontAwesomeIcon icon={faChevronRight} />
            </SliderButton>
          </Slider>
        </Content>
      </AlignWrapper>
    </ContentWrapper>
  );
};

export default MainContent;
