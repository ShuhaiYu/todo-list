import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions';

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, text));
    };

    const onToggleTodo = () => {
        dispatch(toggleTodo(todo._id));
    };

    const onDeleteTodo = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(todo._id));
    };

    const onEditToggle = (e) => {
        e.stopPropagation();
        setEditing(prevState => !prevState);
    };

    return (
        <li
            className="task"
            onClick={onToggleTodo}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            {editing ? (
                <form onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        value={text}
                        className="edit-todo"
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
            ) : (
                <span>{todo?.data}</span>
            )}

            <span className="icon" onClick={onDeleteTodo}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className="icon" onClick={onEditToggle}>
                <FontAwesomeIcon icon={faPen} />
            </span>
        </li>
    );
};

export default Todo;
