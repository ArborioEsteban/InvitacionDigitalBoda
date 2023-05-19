
import Counter from '../Counter/Counter'
import './GiftSection.css'

const GiftSection = () => {
  return (
    <>
        <h2 id="textGift" className='my-2'>Regalo opcional <br></br> Asistencia: obligatoria</h2>
        <p className='subtitleGift my-5'>
            Para nosotros lo mas importante es tu presencia. Pero si quieres
            obsequiarnos algo, encontraras un cofre el dia de la boda en el cual
            podras poner tu regalo en efectivo.
        </p>

        <Counter></Counter>

        <div>
            <p id='subtitleGift' className='mt-5'><a href='https://docs.google.com/forms/d/e/1FAIpQLSeJMeHMvm0CBf4MuK7lzsrAc-lFVG7VlGfUSCO-0VRUus0-8A/viewform?usp=sf_link' target='blankgit ' className='text-decoration-none' id='textConfirmation'>Confirmar Asistencia <br></br> Hasta el 15 de Junio <br></br> Click aqui y confirma tu asistencia</a>
            </p>
            
        </div>


    </>
  )
}

export default GiftSection