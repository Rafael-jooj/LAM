import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigator = ()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" style={{marginLeft:50}}>
                <img style={{width:50, height:40, marginRight:30}} src="images/logolam.png" alt="lam"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/"  style={{marginRight:20}} active>Início</Nav.Link>
                <Nav.Link href="/projetos" style={{marginRight:20}} active>Projetos</Nav.Link>
                <Nav.Link href="/equipe" style={{marginRight:20}} active>Equipe</Nav.Link>
                <Nav.Link href="/contato" style={{marginRight:20}} active>Contato</Nav.Link>
                <Nav.Link href="#" style={{marginRight:20}} active>Missão</Nav.Link>
                <Nav.Link href="#" style={{marginRight:20}} active>Publicações</Nav.Link>
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