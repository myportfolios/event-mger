import React from "react";
import colors from "utils/colors.json";

/**
 *
 * @param {Object} props - all the props passed into the ButtonTwo component
 * @param {Function} getBtnProps - merges the built-in props with the user-provided props and spreads this to the JSX button
 * The ButtonTwo component is a custom component that receives props and passes the props to the getter fn -  getBtnProps
 * The size prop (a className) is merged with the existing className to provide css styles based on user requiremnt. variants are large, medium, and small
 * if no style props are provided by the user, the default styles - color and background are applied. if these props are provided by the user they will override the default styles
 */

function ButtonTwo({ size = "medium", style, ...props }) {
  //prop getters
  const getBtnProps = (props) => {
    return {
      className: `btn btn__${size}`,
      style: {
        color: colors.white,
        backgroundColor: colors.primary.carrot,
        ...style,
      },
      ...props,
    };
  };
  return <button {...getBtnProps({ ...props })}>ButtonTwo</button>;
}

export default ButtonTwo;
