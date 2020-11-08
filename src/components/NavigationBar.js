import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

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
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{ position: 'sticky', top: '0', transition: '200ms'}}>
                <Navbar.Brand href="/">{/* <Logo src={logo}/> */}Heg's Fab and Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        :
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ position: 'sticky', top: '0', transition: '200ms', boxShadow: '10px 0px 4px #333', backgroundColor: '#ab0d1f'}}>

                <Navbar.Brand href="/">{/* <Logo src={logo}/> */}Heg's Fab and Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}


export default NavigationBar