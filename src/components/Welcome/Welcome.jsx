import Confirmation from "../Confirmation/Confirmation";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

import "./Welcome.css";


const Welcome = () => {
  return (
    <>
      <div className="vh-100">
        <MusicPlayer/>
        <h5 className="Subtitles pt-2 mt-4">Guarda la Fecha</h5>

        <p id="textFecha">
          Viernes <br></br>30/06/23 <br></br> 22hs
        </p>

        <p className="Subtitles">Te invitamos a Celebrar nuestra Boda</p>

        <div>
          <p className="title m-0">Emmanuel</p>
          <img src="../../../public/rings.png" id="rings"></img>
          <p className="title m-0">Nancy</p>
          

        </div>


        <div className="mt-5">
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
