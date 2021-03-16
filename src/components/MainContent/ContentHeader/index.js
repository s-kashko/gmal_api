import React from "react";
import styled, { css } from "styled-components";
import CityDropdown from "../../CityDropdown";

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 0 18px;
`;

const cityStyle = css`
  font-size: 2.5rem;
`;

const H1 = styled.h1`
  margin: 0 30px 0 29px;
`;

const ContentHeader = () => (
  <HeaderBox>
    <H1>Page title in</H1>
    <CityDropdown cityStyle={cityStyle} />
  </HeaderBox>
);

export default ContentHeader;
