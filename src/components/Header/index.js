import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBell,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logotype@2x.png";

import { MAIN_CONTAINER_WIDTH } from "../../constants";

const HeaderContainer = styled.header`
  height: 115px;
  background-color: #2d313d;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${MAIN_CONTAINER_WIDTH};
  color: white;
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
`;

const PhotoLink = styled.a`
  display: block;
  width: fit-content;
  margin: 20px 10px;
`;

const ProfileInfo = styled.div`
  align-self: flex-end;
`;

const FAIcon = styled(FontAwesomeIcon)`
  opacity: 0.4;
`;

const ArrowDown = styled(FAIcon)`
  font-size: 10px;
  margin: auto 3px;
`;

const FAIconSize = styled(FAIcon)`
  font-size: 1.2em;
  margin: 0 14px 0 10px;
`;

const City = styled.span`
  border-bottom: 1px dashed #727989;
  color: white;
  opacity: 0.4;
`;

const UserName = styled.span`
  opacity: 0.4;
`;

const A = styled.a`
  color: white !important;
  text-decoration: none;

  &:hover * {
    color: white;
    fill: white;
    opacity: 0.7;
    text-decoration: none !important;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <PhotoLink href="#">
          <Logo src={logo} alt="userpic" />
        </PhotoLink>
        <ProfileInfo>
          <A href="#">
            <City>New York</City>
            <ArrowDown icon={faChevronDown} />
          </A>
          <A href="#">
            <FAIconSize icon={faBell} />
          </A>
          <A href="#">
            <FAIconSize icon={faEnvelope} />
          </A>
          <A href="#">
            <UserName>userName</UserName>
          </A>
          <A href="#">
            <Photo
              src="https://lh6.googleusercontent.com/-15xTl3N0mQk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclUxFtICxV2e47kM5Huq8K1uLQkag/s96-c/photo.jpg"
              alt="userpic"
            />
          </A>
          <A href="#">
            <FAIcon icon={faSearch} />
          </A>
        </ProfileInfo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
