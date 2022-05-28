import React from "react";
import Title from "../../components/Title";
import './contact.css';
import Faces from "../../components/faces";
import Icons from "../../components/Icons";

const Contato = ()=>{
    return(
        <div className="contact">
            <div className="contact-title">
                <Title title="Como você prefere falar com a gente?"/>
            </div>
            <div className="contact-faces">
                <Faces foto="images/equipe/Horllys.jpeg"/>
                <Faces foto="images/equipe/Matheus.JPG"/>
                <Faces foto="images/equipe/Micaele.jpg"/>
                <Faces foto="images/equipe/Fernanda.JPG"/>
                <Faces foto="images/equipe/Rogério.jpg"/>
            </div>
            <div className="contact-icons">
                <Icons/>
            </div>
            <div className="contact-find">
                <p>Nos Encontre</p>
            </div>
            <div className="contact-map">
                <img src="https://img.freepik.com/vetores-gratis/navegacao-do-aplicativo-ha-um-destino-para-chegar-ao-mapa-gps-de-destino_403715-36.jpg?w=826" alt="mapa"/>
            </div>
        </div>
    )
}

export default Contato;