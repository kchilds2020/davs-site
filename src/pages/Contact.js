import React from 'react'
import NavigationBar from '../components/NavigationBar'
import styled from 'styled-components';
import IMG from '../images/contact-img.jpg'


function Contact() {
    return (
        <div style={{fontFamily: 'Raleway'}}>
            <NavigationBar />
            <SectionHeader>
              <Image></Image>
                <Title>Contact</Title>
              </SectionHeader>
              <div>Test</div>     
        </div>
    )
}

const SectionHeader = styled.div`
  height: 300px;
  width: 100%;
  z-index: -200;
`
const Image = styled.div`
  background-image: url(${IMG});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  filter: brightness(40%);
  z-index: -100;
`
const Title = styled.div`
  position: absolute;
  top: 150px;
  color: white;
  width: 100%;
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  z-index: 100;
`

export default Contact
