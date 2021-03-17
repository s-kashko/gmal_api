import { useState } from "react";
import styled from "styled-components";
import { Tooltip } from "reactstrap";
import base64url from "base64url";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faClock, faTag } from "@fortawesome/free-solid-svg-icons";

import member from "../../images/member1.png";

const MessageBox = styled.div`
  display: flex;
  margin: 26px 25px 0 30px;
`;

const Message = styled.div`
  width: 100%;
`;

const FromName = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
`;

const SnippetContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 3px 30px 7px 0;
  font: 14px Arial, sans-serif;
  color: #333;
`;

const SenderPhoto = styled.div`
  padding-right: 15px;
`;

const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 12px Arial, sans-serif;
  color: #99a1b3;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemTitle = styled.span`
  font: 700 16px Arial, sans-serif;
  color: #4f9cd4;
  margin-top: 2px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Status = styled.div`
  padding: 3px 13px;
  margin-left: 25px;
  background-color: #f2f4f8;
  border-radius: 5px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const FlexUl = styled.ul`
  display: flex;
  font: 12px Arial, sans-serif;
  color: #99a1b3;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin-right: 2px;

  &:hover {
    opacity: 0.7;
  }
`;

const CommentsSpan = styled.span`
  margin-right: 12px;
  cursor: pointer;
`;

const ClockSpan = styled.span`
  cursor: pointer;
`;

const TagA = styled.a`
  font: 12px Arial, sans-serif;
  color: #99a1b3;
  margin-right: 5px;

  &:hover {
    color: #99a1b3;
    opacity: 0.7;
  }
`;

const MessageRow = (props) => {
  const { message, openModal } = props;

  const fromHeader = message.payload.headers.find(
    (item) => item.name === "From"
  );
  const from = fromHeader.value;
  const fromName = fromHeader.value.split(" <")[0];
  const subjectHeader = message.payload.headers.find(
    (item) => item.name === "Subject"
  );
  const subject = subjectHeader?.value || "";

  const htmlPart = message.payload.parts.find(
    (item) => item.mimeType === "text/html"
  );
  const messageHtml = base64url.decode(htmlPart.body.data); //.slice(13, -15);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <MessageBox>
      <SenderPhoto>
        <img src={member} alt="member" />
      </SenderPhoto>
      <Message>
        <MessageInfo>
          <FlexBox>
            <FromName id={`Tooltip-${message.id}`}>
              {fromName}
              <Tooltip
                placement={"top"}
                isOpen={tooltipOpen}
                target={`Tooltip-${message.id}`}
                toggle={toggle}
              >
                {from}
              </Tooltip>
            </FromName>
            <Status>PRO</Status>
          </FlexBox>
          <FlexBox>
            <CommentsSpan>
              <FAIcon icon={faComments} />2
            </CommentsSpan>{" "}
            <ClockSpan>
              <FAIcon icon={faClock} />
              3Y
            </ClockSpan>
          </FlexBox>
        </MessageInfo>

        <TitleBlock>
          <ItemTitle onClick={() => openModal(subject, messageHtml)}>
            {subject || "[no subject]"}
          </ItemTitle>
        </TitleBlock>

        <SnippetContent>{message.snippet}</SnippetContent>

        <FlexUl>
          <li>
            <TagA href="#">
              <FontAwesomeIcon icon={faTag} />
            </TagA>
          </li>
          <li>
            <TagA href="#">tag1</TagA>
          </li>
          <li>
            <TagA href="#">tag2</TagA>
          </li>
          <li>
            <TagA href="#">tag3</TagA>
          </li>
        </FlexUl>
      </Message>
    </MessageBox>
  );
};

export default MessageRow;
