import React from 'react'
import team from '../img/about-us.jpeg'

const Team = () => {
  return (
    <div id="#About">
    <div className="container" style={{paddingTop:"20px", border:"2px black"}}>
        <div className="row">
        <h2 style={{textAlign:"center", paddingTop:"20px", fontFamily:"Tangerine"}}><u>About Us</u></h2>
            <div className="col-md-6">
                
                <h2>We are</h2>
<h2 style={{color:"#6e99e6"}}>Monumental Concepts & Displays</h2>

    <p style={{fontFamily:"verdana", lineHeight:"2"}}>...an Out of Home (Billboard) media solution provider and a Pan Nigeria player.

Established in 2001, is a company driven by innovation and professionalism with a philosophy of adding value to our client’s portfolio.

Registered with: The Advertising Practitioners Council of Nigeria (APCON), the Outdoor Advertising Association of Nigeria (OAAN) the sectorial regulatory body; Lagos State Signage & Advertising Agency (LASAA ) to practice outdoor in Lagos State, the Federal Capital Development Authority (FCDA) to practice out door in Abuja and all agencies in States where outdoor is regulated in Nigeria.

We aspire to be the leading player within our category through sustained innovation, technology and creativity that will add value to service delivery using seamless system of administration that focuses on team work, creativity, passion and goal getting attitude from the workforce.</p>
            </div>
            <div className="col-md-6">
            <img src={team} alt="" srcset=""  height="500" width="285"/>
            </div>
        </div>

        <div className="row team">
            
        </div>

    </div>

    </div>
  )
}

export default Team