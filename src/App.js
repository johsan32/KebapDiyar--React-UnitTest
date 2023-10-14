import "./App.css";
import Form from "./components/Form";
import Mezeler from "./components/Mezeler";
import Kebaps from "./components/Kebaps";

function App() {
  return (
    <div className="App">
      <header className="App-header gap-5 mb-3">
        <div className="d-flex align-items-center">
          <img src="./images/logo.png" className="App-logo"></img>
          <h1 className="hidden ml-3">Kebap Diyarı</h1>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h2 className="hidden">Unit Test Project</h2>
          <img src="./images/test.png" style={{ width: "80px" }}></img>
        </div>
      </header>
      <div className="container">
        <Kebaps />
        <Mezeler />
        <Form />
      </div>
    </div>
  );
}

export default App;
