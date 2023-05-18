import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Counter from "./components/Counter/Counter";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      <Container>
        <div className="vh-100">
          <Welcome />
        </div>
      </Container>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
