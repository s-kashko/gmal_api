import MessageRow from "../MessageRow";
import styled, { css } from "styled-components";

const Table = styled.div`
  margin: 10px;
`;

const MessagesTable = (props) => {
  const { messages, openModal } = props;

  return (      
    <Table>
      {!!messages?.length && messages.map(message => 
        <MessageRow key={message.id} message={message} openModal={openModal} /> 
      )}
    </Table>
  );
}

export default MessagesTable;