import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterCustom from "./router";
import "./styles/style.scss";
function App() {
  return (
    <Router>
      <RouterCustom />
    </Router>
  );
}

export default App;
