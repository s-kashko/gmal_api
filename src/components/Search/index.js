import styled, { css } from "styled-components";

const SearchSection = styled.div`
  margin: 10px;
`;

const Search = (props) => {
  const { searchInput, changeSearchInput, search } = props;

  return (      
    <SearchSection>
      <input type="text" value={searchInput} onChange={(event)=>{changeSearchInput(event.target.value)}} placeholder="Search mail" />
      <button onClick={search}>Search</button>
    </SearchSection>
  );
}

export default Search;