import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import ListDisplay from "../ListDisplay/ListDisplay";

// const list = ["Adetola", "Itose", "Oluwatomiwa", "Anuoluwapo", "Oluwafisayomi"];

function AutoDisplay({ list = [] }) {
  const [filter, setFilter] = useState("");
  return (
    <>
      <TextInput getInputValue={setFilter} value={filter}></TextInput>
      <ListDisplay
        list={list}
        filter={filter}
        getUserSelection={setFilter}
      ></ListDisplay>
    </>
  );
}

export default AutoDisplay;
