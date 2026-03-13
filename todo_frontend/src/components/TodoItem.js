import React from 'react';
import Button from './ui/Button';

/**
 * Single todo row.
 *
 * @param {{
 *   todo: { id: string, title: string, completed: boolean },
 *   onToggle: (id: string) => void,
 *   onDelete: (id: string) => void,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function TodoItem(props) {
    const { todo, onToggle, onDelete } = props;

    return (
        <li className="todo-item">
            <label className="todo-item__label">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
                />
                <span className={todo.completed ? 'todo-item__title todo-item__title--done' : 'todo-item__title'}>
                    {todo.title}
                </span>
            </label>

            <div className="todo-item__actions">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onToggle(todo.id)}
                    ariaLabel={todo.completed ? 'Mark incomplete' : 'Mark complete'}
                >
                    {todo.completed ? 'Undo' : 'Done'}
                </Button>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(todo.id)}
                    ariaLabel="Delete todo"
                >
                    Delete
                </Button>
            </div>
        </li>
    );
}

export default TodoItem;
