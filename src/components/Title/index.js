import React from "react";
import './title.css';

const Title = (props)=>{
    return(
        <div>
            <h3 className="title">{props.title}</h3>
        </div>
    )
}

export default Title;