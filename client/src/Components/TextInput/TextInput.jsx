import React, { useEffect, useRef, useState } from "react";

/**
 *
 * @param {label} String - input label
 * @param  {handleUserInput} function - returns input value to parent component
 * @param
 * @returns
 */
// function TextInput({
//   handleUserInput,
//   placeholder,
//   selectedValue,
//   ...inputProps
// }) {
//   const [inputValue, setInputValue] = useState("");
//   const inputRef = useRef(null);
//   useEffect(() => {
//     setInputValue(selectedValue);
//   }, [selectedValue]);
//   //set focus on input
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   //update input state when value changes
//   useEffect(() => {
//     if (handleUserInput) handleUserInput(inputValue);
//     // console.log("inputValue", inputValue);
//   }, [inputValue]);
//   //set input if user selects a value
//   // useEffect(() => {
//   //   selectedValue && setInputValue(selectedValue);
//   // }, [selectedValue]);
//   const onChangeHandler = (e) => {
//     //set the state first
//     // if (handleUserInput) handleUserInput(e.target.value);
//     setInputValue(e.target.value);
//   };
//   return (
//     <div>
//       {/* <label>{label}</label> */}
//       <input
//         {...inputProps}
//         ref={inputRef}
//         value={inputValue}
//         placeholder={placeholder}
//         onChange={(e) => {
//           onChangeHandler(e);
//         }}
//       />
//     </div>
//   );
// }

function TextInput({ style = {}, getInputValue, ...props }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    getInputValue && getInputValue(inputValue);
  }, [inputValue, getInputValue]);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleUserInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const getTextInputProps = (props) => {
    return {
      className: `input`,
      type: "text",
      ref: inputRef,
      style: { ...style },
      onChange: handleUserInput,
      ...props,
    };
  };
  return (
    <input onChange={getInputValue} {...getTextInputProps({ ...props })} />
  );
}

export default TextInput;
