import React from "react";
import './conteudo.css'

const Conteudo = (props)=>{
    return(
        <div className="conteudo">
            <p> {props.content} </p>
        </div>
    )
}

export default Conteudo;