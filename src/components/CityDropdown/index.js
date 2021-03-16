import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { selectCity } from "../../Redux/userProfile/actions";
import {
  selectCityOptions,
  selectCitySelected,
} from "../../Redux/userProfile/selectors";

const CityBox = styled.div`
  position: relative;
  cursor: pointer;
`;

const City = styled.span`
  border-bottom: 1px dashed #727989;
  ${({ cityStyle }) => cityStyle}
`;

const FAIcon = styled(FontAwesomeIcon)`
  opacity: 0.4;
`;

const ArrowDown = styled(FAIcon)`
  font-size: 10px;
  margin: auto 3px;
`;

const DropDown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  background-clip: padding-box;
`;
const Option = styled.li``;

const CityLink = styled.span`
  color: #333;
  outline: none;
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.4;
  color: #646d81;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #333;
    background-color: #f2f4f8;
  }
`;

const CityDropdown = ({ cityStyle }) => {
  const [cityDDVisible, setCityDDVisible] = useState(false);
  const SelectedCity = useSelector((state) => selectCitySelected(state));

  return (
    <CityBox
      onClick={() => setCityDDVisible(!cityDDVisible)}
      setCityDDVisible={setCityDDVisible}
    >
      <City cityStyle={cityStyle}>{SelectedCity}</City>
      <ArrowDown icon={faChevronDown} />
      {cityDDVisible && <Dropdown />}
    </CityBox>
  );
};

const Dropdown = () => {
  const dispatch = useDispatch();
  const selectCityDispatch = (city) => dispatch(selectCity(city));
  const cityOptions = useSelector((state) => selectCityOptions(state));
  return (
    <DropDown>
      {cityOptions.map((city) => (
        <Option onClick={() => selectCityDispatch(city)}>
          <CityLink>{city}</CityLink>
        </Option>
      ))}
    </DropDown>
  );
};

export default CityDropdown;
