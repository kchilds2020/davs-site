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
        <SecDiv></SecDiv>
        </>
    )
  }

const SecDiv = styled.div`
    height: 300px;
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




export default SlideShow
