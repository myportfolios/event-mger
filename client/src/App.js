import React, { useState } from "react";
import "./css/main.css";
import Label from "./Components/Label/Label";
import Button from "./Components/Button/Button";
import WelcomeComponent from "./Components/WelcomeComponent/WelcomeComponent";
import TextInput from "./Components/TextInput/TextInput";

function App() {
  const [inpValue, setInpValue] = useState("");
  console.log("inpValue in App", inpValue);
  const getInputvalue = (val) => {
    setInpValue(val);
  };
  return (
    <div className="App">
      <h1>Client works</h1>
      {/* <Label title="Home" size="xl" /> */}
      {/* <Button title="Primary" color="red" size="1.6rem" /> */}
      {/* <WelcomeComponent person="" /> */}
      <TextInput
        type="text"
        handleUserInput={getInputvalue}
        placeholder="Insert value"
      />
    </div>
  );
}

export default App;

//run "git reset 'commit-hash' reset" to go to a specific commit
