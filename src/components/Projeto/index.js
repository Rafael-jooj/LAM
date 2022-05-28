import React from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projeto= (props)=>{
    return(
        <div>
            <Container>
            <Row>
                <Col lg="4">
                    <img src={props.url} style={{width:250}} alt="software"/>
                </Col>
                <Col lg="8">
                    <h4 style={{marginTop:50}}>{props.title}</h4>
                    <p>{props.content}</p>
                    <Button href={props.site} target="_blank" variant="outline-secondary">Visitar site da ferramenta</Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Projeto;