import React from 'react'
import background from '../images/background.jpg'
import styled from  'styled-components'
import {Header, Title, TagLine, CallToAction, FDRow} from './styles/general'

function SlideShow() {

  return (
        <>
        <Header>
            <div style={{height: '100px'}}></div>
            <Background src = {background}/>
            <Title>Heg's Fab and Design</Title>
            <TagLine>Custom Designs Made Simple</TagLine>
            <FDRow>
                <CallToAction onClick = {() => {window.location.href='/Contact'}}>Contact</CallToAction>
                <CallToAction onClick = {() => {window.location.href = '/Services'}}>Services</CallToAction>
                
            </FDRow>
        </Header>
        <Section> 
            <SecInfo style={{backgroundColor: 'white'}}>
            {/* <Logo src={picture}/> */}
            </SecInfo>
            <SecInfo>
            <h1>About</h1>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna sapien. Vivamus tempor finibus felis, vel facilisis elit volutpat ac. Nulla nisl nisl, vestibulum sed ullamcorper id, placerat sit amet urna. Cras vitae orci justo. Maecenas non sapien accumsan, varius diam vitae, fringilla quam.
            </Paragraph>
            </SecInfo>
        </Section>
        <SecDiv></SecDiv>
        </>
    )
  }

const SecDiv = styled.div`
    height: 300px;
`

const Paragraph = styled.p`
    font-size: 20px;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
    object-fit: cover;
    filter: brightness(45%);
`


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

export default SlideShow
