import React, { useState } from 'react';
import Button from './ui/Button';
import TextInput from './ui/TextInput';

/**
 * Form for adding a todo.
 *
 * @param {{
 *   onAddTodo: (title: string) => void,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function TodoForm(props) {
    const { onAddTodo } = props;
    const [title, setTitle] = useState('');
    const trimmedTitle = title.trim();
    const isValid = trimmedTitle.length > 0;

    /**
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function handleSubmit(e) {
        e.preventDefault();
        if (!isValid) return;
        onAddTodo(trimmedTitle);
        setTitle('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextInput
                value={title}
                onChange={setTitle}
                placeholder="What needs doing?"
                ariaLabel="Todo title"
                maxLength={120}
            />
            <Button type="submit" variant="primary" disabled={!isValid} ariaLabel="Add todo">
                Add
            </Button>
        </form>
    );
}

export default TodoForm;
