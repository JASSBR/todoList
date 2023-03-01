import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faPenToSquare} style={{'color':'#3C2A21'}} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} style={{'color':'#3C2A21'}} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
      )
}

export default Todo