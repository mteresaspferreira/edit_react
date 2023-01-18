import "./App.css";
import EX01 from "./components/EX01/EX01";

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: "#64636b", paddingBottom: "30px" }}>React Hooks</h1>
      </div>
      <div className="ex-one">
        <h2 className="title-exercise">Exercício 01</h2>
        <EX01 />
      </div>
    </div>
  );
}

export default App;
