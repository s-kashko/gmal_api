import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectSearchInput } from "../../Redux/rowData/selectors";
import { changeSearchInput } from "../../Redux/rowData/actions";
import { getMessagesThunk } from "../../Redux/rowData/thunks";
import { selectUserProfile } from "../../Redux/userProfile/selectors";

const SearchSection = styled.div`
  margin: 10px;
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
      <input type="text" value={searchInput} onChange={(event)=>{changeSearchInputStr(event.target.value)}} placeholder="Search mail" />
      <button onClick={()=>{dispatch(getMessagesThunk(userProfile.accessToken, userProfile.id, searchInput));}}>Search</button>
    </SearchSection>
  );
}

export default Search;