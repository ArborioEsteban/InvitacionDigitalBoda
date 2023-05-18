import { Container } from 'react-bootstrap'
import './Welcome.css'

const Welcome = () => {
  return (
    <>
    <div className='imagenContendeor'>
        {/* <img src="../../../public/letras.png" alt="EmanuelYNancy" className='text-center imagenNombres'/> */}
        <h6 className='Subtitles pt-5 mt-5'>Guarda la Fecha</h6>
        <p id="textCounter">Viernes 30/06/2023</p>
        <p className='title mt-5'>Emmanuel Y Nancy</p>
        {/* <p className='title'>Y</p>
        <p className='title'>Nancy</p> */}
        
        {/* <h3 className='fs-1 Subtitles'>30/6/23 - 22hs</h3>
        <h4 className='fs-1 Subtitles'>Salon Danubio <br></br> Ruta 315
Km 9<br></br>
Tafi viejo</h4> */}
    </div>
    </>
  )
}

export default Welcome