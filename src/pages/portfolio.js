import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import Container from "../components/container"
import { Link } from "gatsby"
import posed from 'react-pose'

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
      <a href="https://github.com/rohitcricket/TensorFlow2.0-FashionClassification">link</a>
      </Box>
      <br/>
   
      <Box className="box">
      <h2>Detect Traffic Signs</h2>
      <img src="https://source.unsplash.com/500x400?trafficsigns" alt="fashion" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectTrafficSigns">link</a>
      </Box>
      <br />
     
      <Box className="box">
      <h2>Art with AI</h2>
      <img src="https://source.unsplash.com/500x400?art" alt="Art" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DreamDeepArtWithAI">link</a>
      </Box>
      <br />

      <Box className="box">
      <h2>Detect Diabetes with AI</h2>
      <img src="https://source.unsplash.com/500x400?diabetes" alt="diabetes" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectDiabetes">link</a>
      </Box>
      <br />
    
    </Container>
  </Fragment>
)