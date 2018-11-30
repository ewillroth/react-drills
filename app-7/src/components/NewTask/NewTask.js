import React from 'react';

const NewTask = props => {
    return (
        <div>
            <input type ='text' onChange={props.onChange} value = {props.inputvalue}></input>
            <button onClick={props.onClick}>Add</button>
        </div>
    )
}

export default NewTask;