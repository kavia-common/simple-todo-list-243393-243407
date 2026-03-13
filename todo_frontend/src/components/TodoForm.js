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

    /**
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = title.trim();
        if (!trimmed) return;
        onAddTodo(trimmed);
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
            <Button type="submit" variant="primary">
                Add
            </Button>
        </form>
    );
}

export default TodoForm;
