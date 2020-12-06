import React from "react";
import styled, { keyframes }  from 'styled-components';

const moveInLeftAnimation = keyframes`
    0% {opacity: 0; transform: translateX(-100px);}
    80% {}
    100% {opacity: 1; transform: translate(0);}


`

export const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
  animation: ${moveInLeftAnimation} 2s linear;
`

