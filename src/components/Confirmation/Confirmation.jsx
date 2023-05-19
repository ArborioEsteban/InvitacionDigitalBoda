import "./Confirmation.css";

import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';

const Confirmation = () => {
  return (
    <>
      {/* <p id='textConfirmation'><a href='https://docs.google.com/forms/d/e/1FAIpQLSeJMeHMvm0CBf4MuK7lzsrAc-lFVG7VlGfUSCO-0VRUus0-8A/viewform?usp=sf_link' target='blankgit ' className='text-decoration-none' id='textConfirmation'>Confirmar Asistencia Aqui</a>
        </p> */}

      <p id="textSalon">Salón Danubio - Ruta 315 Km 9 - <br></br>Tafi viejo </p>
      {/* <div id="map">
        <UseAnimations animation={arrowDown} size={46} strokeColor="gold" />
      </div> */}
        <p id="textConfirmation">
          <a
            href="https://goo.gl/maps/1B2gdcBF8oArTeuD7"
            target="blank"
            className="text-decoration-none"
            id="textConfirmation"
          >
            <b>Como llegar? Clíck Aquí</b>
          </a>
          <hr className="lineaHr"></hr>
        </p>
    </>
  );
};

export default Confirmation;
