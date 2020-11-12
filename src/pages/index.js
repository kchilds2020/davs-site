import React from "react"
import NavigationBar from '../components/NavigationBar'
import SlideShow from '../components/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet'
import styled from 'styled-components'
export default function Home() {
  return (
    <>
    <Helmet title="Home" defer={false} />
    <div style={{fontFamily: 'Raleway'}}>
      <NavigationBar/>
      <SlideShow />
        <Section> 
            <SecInfo style={{padding: '0px'}} >
            {/* <Logo src={picture}/> */}
            </SecInfo>
            <SecInfo>
            <h1>About</h1>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna sapien. Vivamus tempor finibus felis, vel facilisis elit volutpat ac. Nulla nisl nisl, vestibulum sed ullamcorper id, placerat sit amet urna. Cras vitae orci justo. Maecenas non sapien accumsan, varius diam vitae, fringilla quam.
            </Paragraph>
            </SecInfo>
        </Section>
      <div style={{color: 'white', fontFamily: 'Raleway'}}>Hello world!!!</div>
    </div>
    </>
  )
}


const Section = styled.div`
    background-color: rgb(64, 72, 81);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`

const SecInfo = styled.div`
    width: 500px;
    height: 100%;
    padding: 10px;
    background-color: rgb(52, 58, 64);
    color: white;
    border-radius: 4px;
    height: auto;
`

const Paragraph = styled.p`
    font-size: 20px;
`
