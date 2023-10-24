import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     return (
        <>

        <div className='container work-page'>
            <div className='text-zone'>
                
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j','e','c','t','s']}
                idx={15}
                />
                </h1>
            </div>
        
        <Container data-spy="scroll" className='cards' style={{ overflowY: 'scroll', overflowX: "hidden" }}> 
        <Row className='px-5 py-4'>
        </Row>
        <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black' }}>
      <Card.Img variant="top" 
      src="https://www.letsgolearn.com/wp-content/uploads/2023/02/KidsinComputerLab_30851787sm.jpg"
       />
      <Card.Body>
        <Card.Title>IEP Accommodation Resources</Card.Title>
        <Card.Text>
          A website that includes IEP Accommodations and an openAI chatgpt interface acting as a teacher to answer any questions.
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://accommodation-resources.com/#/"
        target="_blank">IEP Accommodation Resources</Button>
      </Card.Body>
      
    </Card>
    </Row>
    <Row className='cards'>
        <Card className='hover-card' style={{ width: '38rem',backgroundColor: 'white', color:'black' }}>
      <Card.Img variant="top" 
      src="https://www.classdojo.com/static/cdb0e0cf08f67fed08f35fe80cec04c3/about-image.svg"
       />
      <Card.Body>
        <Card.Title>Social Dojo</Card.Title>
        <Card.Text>
          A social media app for teachers and students to access learning and teaching resources.
        </Card.Text>
        <Button backgroundColor="#F08080"  variant="primary" href="https://social-dojo.netlify.app"
        target="_blank">Social Dojo</Button>
      </Card.Body>
      
    </Card>
    </Row>
    </Container>
    </div>
         
        <Loader type="pacman" />
        </>

    )
}

export default Work