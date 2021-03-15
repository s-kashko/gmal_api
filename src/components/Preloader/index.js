import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  ${({ loaderStyles }) => loaderStyles}
`;

const Preloader = ({ loaderStyles }) => (
  <StyledSvg
    svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    version="1.0"
    viewBox="0 0 128 35"
    space="preserve"
    // style={loaderStyle}
    loaderStyles={loaderStyles}
  >
    <g>
      <circle cx="17.5" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        dur="900ms"
        begin="0s"
        repeatCount="indefinite"
        keyTimes="0;0.167;0.5;0.668;1"
        values="0.3;1;1;0.3;0.3"
      />
    </g>
    <g>
      <circle cx="110.5" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        dur="900ms"
        begin="0s"
        repeatCount="indefinite"
        keyTimes="0;0.334;0.5;0.835;1"
        values="0.3;0.3;1;1;0.3"
      />
    </g>
    <g>
      <circle cx="64" cy="17.5" r="17.5" />
      <animate
        attributeName="opacity"
        dur="900ms"
        begin="0s"
        repeatCount="indefinite"
        keyTimes="0;0.167;0.334;0.668;0.835;1"
        values="0.3;0.3;1;1;0.3;0.3"
      />
    </g>
  </StyledSvg>
);

export default Preloader;
