import { useState } from "react";
import MessageModal from "./components/MessageModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header";
import HeaderNavigation from "./components/HeaderNavigation";
import MainContent from "./components/MainContent";
import { authorize } from "./utils/googleApi";

const App = () => {
  const [modal, setModal] = useState(null);
  const openModal = (title, content) => setModal({ title, content });
  const closeModal = () => setModal("");  

  const dispatch = useDispatch();

  useEffect(() => {
    authorize(dispatch);
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
      
      <MessageModal
        title={modal?.title}
        content={modal?.content}
        closeModal={closeModal}
      />
    </AppContainer>
  );
};

export default App;
