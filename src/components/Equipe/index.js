import React from "react";
import './equipe.css'

const Equipe = (props)=>{
    return(
        <div className="box">
            <div className="foto">
                <img src={props.url} alt="user foto"/>
            </div>
            <div className="nome">
                <p>{props.nome}</p>
            </div>
        </div>
    )
}

export default Equipe;