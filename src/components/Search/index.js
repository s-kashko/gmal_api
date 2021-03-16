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
  margin: 10px;
`;

const ButtonStyled = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
`;

const SearchBox = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  padding-right: 25px;
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
                searchInput
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
