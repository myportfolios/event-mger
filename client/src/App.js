import "./css/main.css";
import Label from "./Components/Label";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <h1>Client works</h1>
      {/* <Label title="Home" size="xl" /> */}
      <Button title="Primary" color="red" size="1.6rem" />
    </div>
  );
}

export default App;

//run "git reset 'commit-hash' reset" to go to a specific commit
