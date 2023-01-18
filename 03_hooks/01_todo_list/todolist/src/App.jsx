import "./App.css";
import EX02 from "./components/EX02/EX02";

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: "#64636b", paddingBottom: "30px" }}>React Hooks</h1>
      </div>
      <div className="ex-two" style={{ marginBottom: "80px" }}>
        <h2 className="title-exercise">Exercício 02</h2>
        <EX02 />
      </div>
    </div>
  );
}

export default App;
