import { useState } from "react";
import MessageModal from "./components/MessageModal";
import { getMessagesThunk } from "./Redux/rowData/thunks";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header";
import HeaderNavigation from "./components/HeaderNavigation";
import MainContent from "./components/MainContent";
import { authorize } from "./utils/googleApi";
import { selectSearchInput } from "./Redux/rowData/selectors";
import { selectUserProfile } from "./Redux/userProfile/selectors";


import { changeSearchInput } from "./Redux/rowData/actions";

const App = () => {
  const [modal, setModal] = useState(null);
  const openModal = (title, content) => setModal({ title, content });
  const closeModal = () => setModal("");
  const searchInput = useSelector((state) => selectSearchInput(state));
  const userProfile = useSelector((state) => selectUserProfile(state));

  const dispatch = useDispatch();

  useEffect(() => {
    authorize(dispatch);
  }, []);


  const search = () => {
    dispatch(getMessagesThunk(userProfile.accessToken, userProfile.id, searchInput));
  };

  const changeSearchInputStr = (searchInput) => {
    dispatch(changeSearchInput(searchInput));
  };

  const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
  `;

  return (
    <AppContainer>
      <Header />
      <HeaderNavigation />
      <MainContent 
        openModal={openModal} 
        searchInput={searchInput}
        changeSearchInput={changeSearchInputStr}
        search={search}
      />
      
      <MessageModal
        title={modal?.title}
        content={modal?.content}
        closeModal={closeModal}
      />
    </AppContainer>
  );
};

export default App;
