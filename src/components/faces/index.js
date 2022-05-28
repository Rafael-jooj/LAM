import React from "react";
import './faces.css';

const Faces = (props)=>{
    return(
        <div className="faces">
            <img src={props.foto} alt="user"></img>
        </div>
    )
}

export default Faces;