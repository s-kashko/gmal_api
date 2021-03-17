import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { selectSearchInput } from "../../Redux/rowData/selectors";
import { changeSearchInput } from "../../Redux/rowData/actions";
import { getMessagesThunk } from "../../Redux/rowData/thunks";
import { selectUserProfile } from "../../Redux/userProfile/selectors";

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 30px 6px;
`;

const ButtonStyled = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  color: #99a1b3;
  font-size: 21px;

  &:hover {
    color: #b6bcc9;
  }
`;

const SearchBox = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 278px;
  height: 38px;
  border: 1px solid #d6d9e1;
  border-radius: 3px;
  font-size: 14px;
  padding: 6px 12px;

  &:focus {
    outline: none;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  }
`;

const Search = () => {
  const dispatch = useDispatch();

  const searchInput = useSelector((state) => selectSearchInput(state));
  const userProfile = useSelector((state) => selectUserProfile(state));

  const changeSearchInputStr = (searchInput) => {
    dispatch(changeSearchInput(searchInput));
  };

  return (
    <SearchSection>
      <SearchBox>
        <InputStyled
          type="text"
          value={searchInput}
          onChange={(event) => {
            changeSearchInputStr(event.target.value);
          }}
          placeholder="Search mail"
        />
        <ButtonStyled
          onClick={() => {
            dispatch(
              getMessagesThunk(
                userProfile.accessToken,
                userProfile.id,
                searchInput,
                "INBOX"
              )
            );
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </ButtonStyled>
      </SearchBox>
    </SearchSection>
  );
};

export default Search;
