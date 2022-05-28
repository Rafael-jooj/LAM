import React from "react";
import './team.css'
import Title from "../../components/Title";
import Equipe from "../../components/Equipe";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const data = [
//     {nome: 'HORLLYS GOMES BARRETO', url:'images/user.png'},
//     {nome: 'Matheus Martins Daude', url:'images/user.png'},
//     {nome: 'Wagner Melo', url:'images/user.png'},
//     {nome: 'Melissa Moraes', url:'images/user.png'}
// ]

const Team = ()=>{
    return(
        <div className="team-back">
            <div style={{textAlign:'center'}}>
                <Title title="Conheça nossa Equipe"/>
            </div>
            <div className="tean">
                <Container>
                    <Row className="linha1">
                        <Col md="3">
                            <Equipe nome='Horllys Gomes Barreto' foto='images/equipe/Horllys.jpeg' funcao="Vice-Coordenador" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4113902U4"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Matheus Martins Daúde' foto='images/equipe/Matheus.JPG' funcao="Doutorando" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4718405A6"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Rogério Cavalcante Gonçalves' foto='images/equipe/Rogério.jpg' funcao="Doutorando" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4246442Y6"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Fernanda Maria Fernandes do Carmo Lemos' foto='images/equipe/Fernanda.JPG' funcao="Doutoranda" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4718405A6"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Equipe nome='Gessi Carvalho de Araújo Santos' foto='images/equipe/Gessi.jpeg' funcao="Coordenadora" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4777525H1"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Ueric José Borges de Souza' foto='images/equipe/Ueric.jpg' funcao="Pós-doutorando" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4385711T5"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Micaele Rodrigues de Souza' foto='images/equipe/Micaele.jpg' funcao="Mestranda" curriculo=""/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Evandro do Nascimento Barros' foto='images/equipe/Evandro.jpg' funcao="Iniciação Científica" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2744715E7"/>
                        </Col>
                    </Row>
                    <Row className="linha3">
                        <Col md="3">
                            <Equipe nome='Flávia Cerqueira Pacheco' foto='images/equipe/Flávia.jpg' funcao="Iniciação Científica" curriculo="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2090923J3"/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Ivo Araújo Pontes' foto='images/user.png' funcao="Iniciação Científica" curriculo=""/>
                        </Col>
                        <Col md="3">
                            <Equipe nome='Rafael Silva Tavares' foto='images/user.png' funcao="Iniciação Científica" curriculo=""/>
                        </Col>
                        <Col md="3">
                            {/* <Equipe nome='Evandro do Nascimento Barros' url='images/equipe/.png'/> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Team;
