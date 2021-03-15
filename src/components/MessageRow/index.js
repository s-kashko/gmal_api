import { useState } from 'react';
import styled, { css } from "styled-components";
import { Tooltip } from 'reactstrap';
import base64url from "base64url";

const Row = styled.div`
  border: 1px solid #ddd;
  margin: 5px 0;
  display: grid;
  grid-template-columns: 1fr 3fr ; 
  cursor: pointer;
`;

const From = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  background-color: #f0f0f0;
`;

const Snippet = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  background-color: #f0f055; 
`;

const FromContent = styled.div`
  overflow: hidden; 
  text-overflow: ellipsis; 
  padding: 0 5px;
`;

const SnippetContent = styled.div`
  overflow: hidden; 
  text-overflow: ellipsis; 
  padding: 0 5px;
`;

const MessageRow = (props) => {
  const { message, openModal } = props;

  const fromHeader = message.payload.headers.find(item=> item.name === 'From');
  const from = fromHeader.value;
  const subjectHeader = message.payload.headers.find(item=> item.name === 'Subject');
  const subject = subjectHeader?.value || '';

  const htmlPart = message.payload.parts.find(item=> item.mimeType === 'text/html');
  const messageHtml = base64url.decode(htmlPart.body.data); //.slice(13, -15);
  

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Row onClick={()=>openModal(subject, messageHtml)}>
      <From>
        <FromContent id={`Tooltip-${message.id}`}>
          {from}
        </FromContent>
        <Tooltip
          placement={"top"}
          isOpen={tooltipOpen}
          target={`Tooltip-${message.id}`}
          toggle={toggle}
        >
          {from}
        </Tooltip>
      </From>

      <Snippet>
        <SnippetContent>
          {message.snippet}
        </SnippetContent>
      </Snippet>
    </Row>
  );
}

export default MessageRow;