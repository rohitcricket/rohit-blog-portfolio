import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import Container from "../components/container"
import { Link } from "gatsby"
import posed from 'react-pose'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
  }
});

export default () => (
  <Fragment>
    <div style={{textAlign: "center"}}>
      <h1>My Portfolio</h1>
    </div>
    <br />
    <Container>
      <Box className="box" style = {{ marginBottom : 50 }}>
      <h2>Classify Fashion Items</h2>
      <img src="https://source.unsplash.com/500x400?fashion" alt="fashion" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/TensorFlow2.0-FashionClassification">Github</a>
        </Card.Body>
      </Card>
      </Box>
      <br/>
   
      <Box className="box">
      <h2>Detect Traffic Signs</h2>
      <img src="https://source.unsplash.com/500x400?trafficsigns" alt="fashion" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectTrafficSigns">Github</a>
        </Card.Body>
      </Card>
 
      </Box>
      <br />
     
      <Box className="box">
      <h2>Art with AI</h2>
      <img src="https://source.unsplash.com/500x400?art" alt="Art" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/TensorFlow2.0-DreamDeepArtWithAI">Github</a>
        </Card.Body>
      </Card>
      </Box>
      <br />

      <Box className="box">
      <h2>Detect Diabetes with AI</h2>
      <img src="https://source.unsplash.com/500x400?diabetes" alt="diabetes" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectDiabetes">Github</a>
        </Card.Body>
      </Card>
      </Box>
      <br />
      <Box className="box">
      <h2>Speak like Darth Vader</h2>
      <img src="https://source.unsplash.com/500x400?darthvader" alt="darthvader" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/iOSNanodegreePitchPerfect">Github</a>
        </Card.Body>
      </Card>
      </Box>
      <br />

      <Box className="box">
      <h2>Blockchain Energy Network</h2>
      <img src="https://source.unsplash.com/500x400?blockchain" alt="blockchain" />
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a href="https://github.com/rohitcricket/IBMBlockChainDecentralizedEnergyNetworkApp">Github</a>
        </Card.Body>
      </Card>
      </Box>
      <br />
    </Container>
  </Fragment>
)