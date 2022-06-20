import React, { useEffect, useRef, useState } from "react";

/**
 *
 * @param {label} String - input label
 * @param  {handleUserInput} function - returns input value to parent component
 * @param
 * @returns
 */
function TextInput({ handleUserInput, placeholder, ...inputProps }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  //set focus on input
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //update input state when value changes
  useEffect(() => {
    if (handleUserInput) handleUserInput(inputValue);
  }, [inputValue]);
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {/* <label>{label}</label> */}
      <input
        {...inputProps}
        ref={inputRef}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
}

export default TextInput;
