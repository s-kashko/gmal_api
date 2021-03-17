import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logotype@2x.png";

import {
  selectUserName,
  selectUserEmail,
} from "../../Redux/userProfile/selectors";
import { MAIN_CONTAINER_WIDTH } from "../../constants";
import CityDropdown from "../CityDropdown";

const HeaderContainer = styled.header`
  height: 115px;
  background-color: #2d313d;
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    height: fit-content;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${MAIN_CONTAINER_WIDTH};
  color: white;

  @media (max-width: 720px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 20px;
  width: 32px;
`;

const Photo = styled.img`
  height: ${({ height }) => height || "20px"};
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 0 15px 0 10px;

  &:hover {
    opacity: 1 !important;
  }
`;

const LogoLink = styled.a`
  display: block;
  width: fit-content;
  margin: 20px 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-self: flex-end;

  @media (max-width: 720px) {
    align-self: center;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  opacity: 0.4;
`;

const FAIconSize = styled(FAIcon)`
  font-size: 1.2em;
  margin: 0 14px 0 10px;
`;

const UserName = styled.span`
  opacity: 0.4;
`;

const A = styled.a`
  color: white !important;
  text-decoration: none;

  ${({ css }) => css}

  &:hover * {
    color: white;
    fill: white;
    opacity: 0.7;
  }

  &:hover {
    text-decoration: none !important;
  }
`;

const cityStyle = css`
  color: white;
  opacity: 0.4;

  &:hover {
    opacity: 0.7;
  }
`;

const mediaNoneStyle = css`
  @media (max-width: 720px) {
    display: none;
  }
`;

const Header = () => {
  const userEmail = useSelector((state) => selectUserEmail(state));
  const userName = useSelector((state) => selectUserName(state));

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink href="#">
          <Logo src={logo} alt="userpic" />
        </LogoLink>
        <ProfileInfo>
          <CityDropdown cityStyle={cityStyle} cityBoxStyle={mediaNoneStyle} />
          <A href="#" css={mediaNoneStyle}>
            <FAIconSize icon={faBell} />
          </A>
          <A href={`mailto:${userEmail}`} css={mediaNoneStyle}>
            <FAIconSize icon={faEnvelope} />
          </A>
          <A href="#" css={mediaNoneStyle}>
            <UserName>{userName || "username"}</UserName>
          </A>
          <a href="#">
            <Photo
              src="https://lh6.googleusercontent.com/-15xTl3N0mQk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclUxFtICxV2e47kM5Huq8K1uLQkag/s96-c/photo.jpg"
              alt="userpic"
            />
          </a>
          <A href="#">
            <FAIcon icon={faSearch} />
          </A>
        </ProfileInfo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
