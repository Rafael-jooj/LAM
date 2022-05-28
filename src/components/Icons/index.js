import React from "react";
import './icons.css';
import {BsTelephone} from 'react-icons/bs';
import {TiMessages} from 'react-icons/ti';
import {RiMessengerLine} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';


const Icons = ()=>{
    return(
        <div className="icon-itens">
            <div className="icon-iten">
                <TiMessages size={50} color="blue"/>
                <p style={{paddingTop:10}}>Envie-nos um SMS</p>
                <p>(63)99999-9999</p>
            </div>
            
            <div className="icon-iten">
                <BsTelephone size={50} color="blue"/>
                <p style={{paddingTop:10}}>Contate-nos</p>
                <p>(63)99999-9999</p>
            </div>
            <div className="icon-iten">
                <RiMessengerLine size={50} color="blue"/>
                <p style={{paddingTop:10}}>Envie-nos uma Messenger</p>
                <a href="/" target="blank">Clique aqui</a>
            </div>
            <div className="icon-iten">
                <AiOutlineMail size={50} color="blue"/>
                <p style={{paddingTop:10}}>Envie-nos um Email</p>
                <p>lam@uft.edu.br</p>
            </div>
        </div>

    )
}

export default Icons;