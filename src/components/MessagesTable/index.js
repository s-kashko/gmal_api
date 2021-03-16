import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectLoading } from "../../Redux/rowData/selectors";
import MessageRow from "../MessageRow";
import Preloader from "../Preloader";

const MessagesWrapper = styled.div`
  position: relative;
  min-height: 100px;
`;

const NothingMessage = styled.div`
  margin-top: 30px;
`;

const loaderStyles = css`
  height: 15px;
  position: absolute;
  top: 30px;
  left: calc(50% - 27px);

  circle {
    fill: #565d6e;
  }
`;

const MessagesTable = (props) => {
  const { messages, openModal } = props;
  const loading = useSelector((state) => selectLoading(state));

  return (
    <MessagesWrapper>
      {loading && <Preloader loaderStyles={loaderStyles} />}
      {!!messages?.length &&
        messages.map((message) => (
          <MessageRow
            key={message.id}
            message={message}
            openModal={openModal}
          />
        ))}

      {!loading && !messages?.length && (
        <NothingMessage>Sorry, nothing found </NothingMessage>
      )}
    </MessagesWrapper>
  );
};

export default MessagesTable;
