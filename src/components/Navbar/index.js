import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigator = ()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Navbar.Brand href="#home" style={{marginLeft:50}}>LAM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Início</Nav.Link>
                <Nav.Link href="https://rta-easy.vercel.app/" target="_blank">RTAeasy</Nav.Link>
                <Nav.Link href="#link">RGeasy</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="https://ww2.uft.edu.br//" target="_blank">
                    <img style={{width:30, height:30, marginRight:30}} src="images/uft.png" alt="uft"/>
                </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigator;