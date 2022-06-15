import React, { useState } from "react";

function Label({ title = "", size = "sm" }) {
  return <label className={`label label-${size}`}>{title}</label>;
}

export default Label;
