import React from 'react';
import Todo from '../Todo/Todo';
import './List.css';


const List = props => {
    let list = props.task.map((item,i)=> <Todo key = {i} item={item}/>)
    return (
        <div>
            {list}
        </div>
    )
}

export default List;