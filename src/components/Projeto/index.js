import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projeto= (props)=>{
    return(
        <div>
            <Container>
            <Row>
                <Col lg="4">
                    <img src={props.url} style={{width:300}} alt="software"/>
                </Col>
                <Col lg="8">
                    <h4 style={{marginTop:50}}>{props.title}</h4>
                    <p>{props.content}</p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Projeto;