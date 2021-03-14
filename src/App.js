import { authorize } from "./utils/googleApi";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { api } from "./API/api";
import Header from "./Header";
import HeaderNavigation from "./HeaderNavigation";
import MainContent from "./MainContent";
import { getMessagesThunk } from "./Redux/app/thunks";

const App = () => {
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

  const loading = useSelector((state) => state.app.loading);

  const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
  `;

  return (
    <AppContainer>
      <Header />
      <HeaderNavigation />
      <MainContent loading={loading} />
      <button onClick={getUserMessages}>get messages</button>
    </AppContainer>
  );
};

export default App;
