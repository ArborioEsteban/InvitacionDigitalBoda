import Counter from "../Counter/Counter";
import "./GiftSection.css";

const GiftSection = () => {
  return (
    <>
      {/* <h2 id="textGift" className='my-2'>Regalo opcional <br></br> Asistencia: obligatoria</h2> */}
      <p className="subtitleGift my-5 pt-3">
        Para nosotros lo más importante es tu presencia. Pero si quieres
        obsequiarnos algo, encontraras un cofre el día de la boda en el cual
        podrás poner tu regalo en efectívo.
      </p>

      <Counter></Counter>

      <div>
        <p id="subtitleGift" className="mt-5">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJMeHMvm0CBf4MuK7lzsrAc-lFVG7VlGfUSCO-0VRUus0-8A/viewform?usp=sf_link"
            target="blankgit "
            className="text-decoration-none"
            id="textConfirmation"
          >
            {" "}
            <b>Confirmá tu asistencia</b> <br></br>Click <b>Aquí</b>{" "}
          </a>
        </p>
      </div>

      <div>
        <hr className="lineaHr"></hr>
        <p id="textConfirmation" className="mt-2">
          <b>
            Civil <br></br>
            28/06/23 - 11hs <br></br>Registro civil <br></br>Sargento Cabral 261{" "}
            <br></br> Villa lujan
          </b>
        </p>
      </div>
    </>
  );
};

export default GiftSection;
