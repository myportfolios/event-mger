import React from "react";
import colors from "../../utils/colors.json";

/**
 *
 * @param {Object} props - an object containing the props to be applied to the label
 * @param {String} style - user defined style. it's merged with default styles and applied using the get
 * @param {String} size - user defined size, comes in 3 variants (sm, md,lg). The default is md
 */

function Label({ style = {}, size = "md", ...props }) {
  const getLabelProps = (props) => {
    return {
      className: `label label__${size}`,
      style: { color: colors.primary.carrot, ...style },
      ...props,
    };
  };
  return <label {...getLabelProps({ ...props })} />;
}

export default Label;
