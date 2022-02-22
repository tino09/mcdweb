import React from 'react'
import {Card, Row} from 'react-bootstrap'
import './Clients.css'

const Clients = () => {
  return (
    <div id="Clients">
      <h1 style={{textAlign:"center", fontFamily:"Allura|Josefin+Sans", paddingTop:"10px"}}>What Clients Say</h1>
      <div className="containe">
            <div className="ro" xs="4">
            <Row xs={4} className="g-4">
          <Card >
            <Card.Img variant="top" src="https://seeklogo.com/images/G/Guinness-logo-BFBFD46C5F-seeklogo.com.png" />
            <Card.Body>
              <Card.Title>Innovative and exciting team</Card.Title>
              <Card.Text>
              
              </Card.Text>
              
            </Card.Body>
          </Card>
            

            
            <Card >
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1354356156500746243/CKj1i2Fk_400x400.jpg" />
            <Card.Body>
              <Card.Title>Passionate about delivering results</Card.Title>
              <Card.Text>
              
              </Card.Text>
              
            </Card.Body>
          </Card>
            

            
            <Card >
            <Card.Img variant="top" src="https://play-lh.googleusercontent.com/2FK9EDMZ7d_nWqptzILVekr_HHU9Oylx9r-R8KNrMCK5J1mpPpyoE95Jsf-eFPWVadc" />
            <Card.Body>
              <Card.Title>No1 Ad Agency in Lagos</Card.Title>
              <Card.Text>
              
              </Card.Text>
              
            </Card.Body>
          </Card>
            
            
            <Card >
            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
              <Card.Title>Quality and results </Card.Title>
              <Card.Text>
              
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Row>
            </div>
          </div>
    </div>
  )
}

export default Clients