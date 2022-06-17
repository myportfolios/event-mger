import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ size }) => size};
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

export default StyledButton;
