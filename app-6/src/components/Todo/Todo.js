import React from 'react';
import './Todo.css'

const Todo = props => { 
    let list = props.list.map((val)=><li>{val}</li>)
    return (
        <div>
            {list}
        </div>
    )
}

export default Todo;