import React from 'react';
import './Todo-list-item.css';

 class TodoListItem extends React.Component {

 
    
     render() {

       const {label, deleteLabel, onToggleDone, onToggleImportant, done, important} = this.props;
        
        let classes = 'todo-list-item-label';
        // let {done, important}= this.state;
        
        if(done) {
            classes+=' done'
        }

        if(important) {
            classes+=' important'
        }
        return (
            <span  className='todo-list-item'> 
                <span onClick={onToggleDone} className={classes} >{label}</span>

                <button onClick ={onToggleImportant} type='button'
                className='btn btn-outline-success btn-sm float-right' >
                    <i className='fa fa-exclamation'/>
                </button>

                <button type='button' onClick={deleteLabel}
                className='btn btn-outline-danger btn-sm float-right' >
                    <i className='fa fa-trash-o'/>
                </button>

           </span>
          )
     }
 }

    

export default TodoListItem;