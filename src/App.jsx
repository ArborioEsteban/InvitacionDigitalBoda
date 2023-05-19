import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



import Welcome from "./components/Welcome/Welcome";
import GiftSection from "./components/GiftSection/GiftSection";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoPlay(false);
    }, 50000); // Desactiva la reproducción automática después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="vh-100">
        <Welcome />
      </div>

      <div className="vh-100">
        <GiftSection></GiftSection>
        


      </div>
    </>
  );
}

export default App;
