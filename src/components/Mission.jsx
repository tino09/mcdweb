import React from 'react'
import why from '../img/why-choose-us.jpeg'

const Mission = () => {
  return (
      
          

              <div class="content-column" style={{backgroundColor:"lightblue" , width:"100%"}}>
              <div class="row ">
              <div className="col-md-6 " style={{padding:"60px"}}>
                  <h2 style={{paddingTop:"50px"}}>WHY YOU SHOULD CHOOSE US</h2>			
                  <h4 style={{fontWeight:"50px", fontFamily:"cursive"}}>WE WORK FOR YOUR SUCCESS AND HEALTH</h4>			
                  <p style={{paddingTop:"50px", lineHeight:"2", maxWidth:"85%"}}>We have a number of different vibrant and highly responsive teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service.</p>
                      <div className="row">
                      <div class="col-xs-12 col-md-6 col-lg-6 block column" style={{paddingTop:"40px", fontSize:"18px", lineHeight:"2"}}>
                          <ul class="styled-list-one">
                              <li>Responsive Team</li>
                              <li>Fast Support</li>
                              <li>Happy Partnership</li>
                          </ul>
                      </div>
                      <div class="col-xs-12 col-md-6 col-lg-6 block column" style={{paddingTop:"40px", fontSize:"18px", lineHeight:"2"}}>
                          <ul class="styled-list-one">
                              <li>Constant Feedback</li>
                              <li>Real Time Monitoring</li>
                              <li>Quick Execution</li>
                          </ul>
                      </div>
                      </div>

                  </div>
                  <div class="image-column col-md-6" >
                <img src={why} alt="" srcset="" />
                  
              </div>
              
              </div>
              

              

         

      </div>

  )
}

export default Mission