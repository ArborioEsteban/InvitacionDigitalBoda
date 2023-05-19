import Confirmation from "../Confirmation/Confirmation";
import MusicPlayer from "../MusicPlayer/MusicPlayer";



import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';


import "./Welcome.css";


const Welcome = () => {
  return (
    <>
      <div className="vh-100">
        <MusicPlayer/>
        {/* <h5 className="Subtitles pt-2 mt-4">Guardá la Fecha</h5> */}

        <p className="Subtitles m-0">Te invitamos a Celebrar nuestra Boda</p>
        <div id="centerImage">
          <p className="title m-0">Emmanuel</p>
          <img src="https://imageup.me/images/26ade914-ab8f-4efb-aebc-1e2c8fe5e365.png" id="rings"></img>
          <p className="title m-0">Nancy</p>
        </div>


        <div className="mt-5">
        <p id="textFecha">
          Fiesta : Viernes <br></br>30/06/23 <br></br> 22hs
        </p>
          <Confirmation></Confirmation>
        </div>

        {/* <div className="mt-1 my-2">
          <Counter />
          
        </div> */}

        
      </div>
    </>
  );
};

export default Welcome;
