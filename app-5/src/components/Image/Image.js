import React from 'react';
import './Image.css';

const Image = (props) => {
    return(
        <img alt ="astronaut" src= {props.image}/>
    )
}

export default Image;