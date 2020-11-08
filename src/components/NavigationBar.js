import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LOGO from '../images/hegsfablogo.jpeg'
import styled from 'styled-components'
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/Fa'

const NavigationBar = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(window.location.pathname === '/'){
            window.addEventListener('scroll',() => window.pageYOffset > 20 ? setVisible(true) : setVisible(false))
        }else{
            setVisible(true)
        }

    },[visible])

    return (
        !visible ?
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{ position: 'sticky', top: '0', transition: '200ms', zIndex: '200'}}>
                <Navbar.Brand href="/"> <Logo src={LOGO}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Nav.Link><FaTwitter size={25} style={{color: 'white'}}/></Nav.Link>
                            <Nav.Link><FaFacebook size={25} style={{color: 'white'}}/></Nav.Link>
                            <Nav.Link><FaInstagram size={25} style={{color: 'white'}}/></Nav.Link>
                        </div>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        :
            <Navbar collapseOnSelect expand="lg" variant="light" style={{ position: 'sticky', top: '0', transition: '200ms', boxShadow: '10px 0px 4px #333', zIndex: '200', backgroundColor: 'rgba(255, 255, 255, .9)'}}>

                <Navbar.Brand href="/"><Logo src={LOGO}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Nav.Link><FaTwitter size={25} style={{color: '#333'}}/></Nav.Link>
                            <Nav.Link><FaFacebook size={25} style={{color: '#333'}}/></Nav.Link>
                            <Nav.Link><FaInstagram size={25} style={{color: '#333'}}/></Nav.Link>
                        </div>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

const Logo = styled.img`
    width: 50px;
    height: 50px;
    /* box-shadow: 2px 2px 8px #333; */
    border-radius: 8px;
`

export default NavigationBar