import React from "react";
import styled, { keyframes } from "styled-components";
 

const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;
 
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ff7979;
  animation: ${bounce} 10s infinite;
`;
 
const AnimationSample = () => <Circle />;
export default AnimationSample;