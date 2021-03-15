import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import member from "../../../images/member1.png";

const MessageBox = styled.section`
  margin: 26px 25px 0 30px;
`;

const Message = () => {
  return (
    <MessageBox>
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={member} alt="userpic" />
        </a>
      </div>
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>User name</span>
          <span className="rank">Pro</span>
          <div className="commentsAndTime pull-right">
            <a href="#">
              <i className="icon-chat"></i>2
            </a>
            <span>
              <i className="icon-clock"></i>
              <time className="timeago" dateTime="2015-06-14T09:24:17Z"></time>
            </span>
          </div>
        </div>
        <div className="itemName">
          <a href="#" className="media-heading" title="Item title">
            Item title 1i
          </a>
          <span className="status pull-right"></span>
        </div>
        <p>
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
          fermentum nunc.{" "}
        </p>
        <div className="tags">
          <button type="submit" className="btn btn-tag">
            <i className="icon-tag"></i>
          </button>
          <a href="#" className="tag" title="tag">
            tag1
          </a>
          <a href="#" className="tag" title="tag">
            tag2
          </a>
          <a href="#" className="tag" title="tag">
            tag3
          </a>
        </div>
      </div>
    </MessageBox>
  );
};
export default Message;
