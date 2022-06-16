import React from "react";
/**
 * @params
 * title - String
 * color - String (text color)
 * bgColor - String (background color)
 * size - String (xs, sm, md, lg, xl)
 * onClick - fn to call when button is clicked
 * @returns Button component
 */

const Button = ({
  title = "",
  color = "white",
  bgColor = "blue",
  size = "md",
  onClick = () => {},
  ...props
}) => {
  return (
    <button className={`btn btn-${size}`} {...props} onClick={() => onClick()}>
      {title}
    </button>
  );
};
export default Button;
