import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../images/slide1.jpg'
import Slide2 from '../images/slide2.jpg'
import Slide3 from '../images/slide3.jpg'
import styled from  'styled-components'

function SlideShow() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item interval={5000}>
      <Carousel.Caption style={{}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    )
}

const Container = styled.div`
  width: 100%;
`

export default SlideShow
