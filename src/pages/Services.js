import React from "react"
import NavigationBar from '../components/NavigationBar'
import IMG from '../images/section-img.jpg'
import styled from 'styled-components'
import {FcShipped} from 'react-icons/Fc'


export default function Services() {
  return (
          <div>
            <NavigationBar />
             <SectionHeader>
                <Image></Image>
                <Title>Services</Title>
             </SectionHeader>
            <Section>
              <SectionLogo>
              <FcShipped size={300}/>
              </SectionLogo>

              <SectionItem>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero massa, luctus id est non, volutpat sagittis enim. 
              </p>
              <p>
              Morbi posuere sodales mauris, sit amet varius arcu vulputate porta. Vivamus et massa a nunc varius malesuada. Etiam aliquet laoreet molestie.
              </p>
              </SectionItem>
            </Section> 
            
          </div>
          )
}

const SectionLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
 width: 300px;

`
const SectionItem = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 font-size: 24px;
 width: 100%;
 max-width: 700px;

`
const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #f4f4f4;
  padding: 20px;
`
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

