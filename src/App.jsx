import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Counter from "./components/Counter/Counter";
import Welcome from "./components/Welcome/Welcome";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  return (
    <>
      <Container>
        <div className="vh-100">
          <Welcome />
          <Counter />
          <Confirmation/>
        </div>
      </Container>
      <div>
      </div>
    </>
  );
}

export default App;
