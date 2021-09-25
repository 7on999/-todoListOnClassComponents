import React from 'react';
import TodoListItem from '../Todo-list-item/Todo-list-item';
import './TodoList.css';


const TodoList = ({todos, deleteLabel, onToggleImportant, onToggleDone})=>{

    const elementsOfGoals = todos.map((item)=>{
        const {id, ...itemProps} = item;
        return <li className='list-group-item' key={id}> <TodoListItem 
        onToggleImportant={()=>{onToggleImportant(id)}}
        onToggleDone={()=>{onToggleDone(id)}} deleteLabel={()=>{deleteLabel(id)}}
        {...itemProps}/> </li> 
        //label={item.label} important={item.important} = {...item}
    })

    return (
        <div>
            <ul className='list-group todo-list'>
                {elementsOfGoals}
            </ul>
        </div>
    )
}

export default TodoList