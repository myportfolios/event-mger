import React from "react";
import StyledButton from "./StyledButton";
/**
 * @params
 * title - String
 * color - String (text color)
 * bgColor - String (background color)
 * size - String (xs, sm, md, lg, xl)
 * onClick - fn to call when button is clicked
 * @returns Button component
 */

const Button = ({ title = "", onClick = () => {}, ...btnProps }) => {
  return (
    <StyledButton {...btnProps} onClick={() => onClick()}>
      {title}
    </StyledButton>
  );
};
export default Button;
