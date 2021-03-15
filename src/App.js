
import { useState } from 'react';
import MessageModal from './components/MessageModal';

import { authorize } from "./utils/googleApi";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { api } from "./api/api";
import Header from "./components/Header";
import HeaderNavigation from "./components/HeaderNavigation";
import MainContent from "./components/MainContent";
import { getMessagesThunk } from "./redux/rowData/thunks";

const App = () => {
  const [modal, setModal] = useState(null);
  const openModal = (title, content) => setModal({title, content});
  const closeModal = () => setModal('');

  const getUserMessages = async () => {
    try {
      const result = await api.getAllMessages();
      console.log("$$result: ", result);
    } catch (err) {
      console.log("$$error: ", err);
    }
  };

  useEffect(() => {
    authorize();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesThunk());
  }, []);

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
      />
      <button onClick={getUserMessages}>get messages</button>
      <MessageModal
        title={modal?.title}
        content={modal?.content}
        closeModal={closeModal}
      />
    </AppContainer>
  );
};

export default App;
