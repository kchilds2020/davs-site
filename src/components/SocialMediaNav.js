import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import styled from 'styled-components'

function SocialMediaNav() {
    return (
                    <Container>
                        <Icon href="#home"><FaFacebook size={32} style={{color: '#3b5998'}}/></Icon>
                        <Icon href="#home"><FaInstagram size={32} style={{color: '#fb3958'}}/></Icon>
                        <Icon href="#home"><FaTwitter size={32} style={{color: '#1DA1F2'}}/></Icon>
                    </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: #343a40;
    
`

const Icon = styled.a`
    padding: 5px 5px 0px 5px;
`

export default SocialMediaNav