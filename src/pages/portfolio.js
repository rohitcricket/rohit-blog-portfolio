import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import Container from "../components/container"
import { Link } from "gatsby"
import posed from 'react-pose'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'


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
    <Jumbotron>
      <h1>My Portfolio</h1>
      <p>
        Hello, world! This page showcases a few projects I have done. 
        I am a certified AWS Solutions Architect who can take your cloud 
        journey from queasy to fighting fit…
      </p>
      <p> If you want to hire me to help you work with projects, 
        please contact me at rohit_bmw@yahoo.com.
      </p>
    </Jumbotron>
{/*     <div style={{textAlign: "center"}}>
      <h1>My Portfolio</h1>
      <p style={{fontStyle: 'italic'}}>Contact me at: rohit_bmw@yahoo.com</p>
    </div> */}
    <br />
    <Container>
      <Box className="box" style = {{ marginBottom : 50 }}>
{/*       <h2>Classify Fashion Items</h2>
      <img src="https://source.unsplash.com/500x400?fashion" alt="fashion" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/500x400?fashion" alt="fashion" />
        <Card.Body>
          <Card.Title>Classify Fashion Items</Card.Title>
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
 {/*      <h2>Detect Traffic Signs</h2>
      <img src="https://source.unsplash.com/500x400?trafficsigns" alt="fashion" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/500x400?trafficsigns" alt="traffic" />
        <Card.Body>
          <Card.Title>Detect Traffic Signs</Card.Title>
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
{/*       <h2>Art with AI</h2>
      <img src="https://source.unsplash.com/500x400?art" alt="Art" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/500x400?art" alt="Art" />
        <Card.Body>
          <Card.Title>Art with AI</Card.Title>
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
{/*       <h2>Detect Diabetes with AI</h2>
      <img src="https://source.unsplash.com/500x400?diabetes" alt="diabetes" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/500x400?diabetes" alt="diabetes" />
        <Card.Body>
          <Card.Title>Detect Diabetes with AI</Card.Title>
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
{/*       <h2>Talk like Darth Vader</h2>
      <img src="https://source.unsplash.com/500x400?darthvader" alt="darthvader" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/500x400?darthvader" alt="darthvader" />
        <Card.Body>
          <Card.Title>Talk like Darth Vader</Card.Title>
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
{/*       <h2>Blockchain Energy Network</h2>
      <img src="https://source.unsplash.com/500x400?blockchain" alt="blockchain" />
      <br /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/500x400?blockchain" alt="blockchain"/>
        <Card.Body>
          <Card.Title>Blockchain Energy Network</Card.Title>
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