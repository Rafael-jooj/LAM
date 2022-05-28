import React from "react";
import './equipe.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'
import {ImProfile} from 'react-icons/im'

const Equipe = (props)=>{
    return(
        <div className="box">
            <div className="tean-image">
                <img src={props.foto} alt="user"></img>
            </div>
            <div className="tean-name">
                <p>{props.nome}</p>
            </div>
            <div className="tean-formation">
                <p>{props.funcao}</p>
            </div>
            <div className="tean-icons">
                <a href={props.facebook} target="blank"><FaFacebookSquare/></a>
                <a href={props.email} target="blank"><MdEmail size={20}/></a>
                <a href={props.linkedin} target="blank"><ImLinkedin2/></a>
                <a href={props.curriculo} target="blank"><ImProfile/></a>
            </div>
        </div>
    )
}

export default Equipe;