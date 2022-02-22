import React from 'react'
import Bonnycamp from '../img/bonny1.png'
import Cantonment from '../img/cantonment1.png'
import Yabatech from '../img/Yabatech1.png'
import Beesam from '../img/Beesam1.png'
import Carousel from "react-bootstrap/Carousel";



const Hero = () => {
  return (
    <div className="App" id="Home">

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bonnycamp}
          alt="First slide"
          height="550px"
        />
        <Carousel.Caption>
          <h2 style={{marginBottom:"0px", marginRight:"600px", fontFamily:"lusida", fontSize:"2.5rem", backgroundColor:"black", opacity:"0.7"}}>Ahmadu Bello way, Victoria Island</h2>
          <a href="https://goo.gl/maps/3d3MvFECFG8G2NUz9" target="_blank" rel="noreferrer" style={{fontSize:20}}>Click for map location</a>
        </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
        <img
          className="d-block w-100"
          src={Cantonment}
          alt="Third slide"
          height="550px"
        />

        <Carousel.Caption>
          <h2 style={{marginBottom:"0px", marginRight:"600px", fontFamily:"lusida", fontSize:"2.5rem", backgroundColor:"black", opacity:"0.7"}}>Mobolaji Bank Anthony Way</h2>
          <a href="https://goo.gl/maps/3d3MvFECFG8G2NUz9" target="_blank" rel="noreferrer" style={{fontSize:20}}>Click to location</a>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Yabatech}
          alt="Herbert Macauley Way"
          height="550px"
        />

        <Carousel.Caption>
          <h2 style={{marginBottom:"0px", marginRight:"600px", fontFamily:"lusida", fontSize:"2.5rem", backgroundColor:"black", opacity:"0.7"}}>Herbert Macaulay Way, Yaba</h2>
          <a href="https://goo.gl/maps/3d3MvFECFG8G2NUz9" target="_blank" rel="noreferrer" style={{fontSize:20}}>Click to location</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Beesam}
          alt="Beesam"
          height="550px"
        />

        <Carousel.Caption>
          <h2 style={{marginBottom:"0px", marginRight:"200px", fontFamily:"lusida", fontSize:"2.5rem", backgroundColor:"black", opacity:"0.7"}}>Airport Link Road, Beesam Bus stop Ikeja</h2>
          <a href="https://goo.gl/maps/3d3MvFECFG8G2NUz9" target="_blank"  rel="noreferrer" style={{fontSize:20}}>Click to location</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Hero