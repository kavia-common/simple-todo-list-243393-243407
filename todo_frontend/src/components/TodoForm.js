import React, { useMemo, useState } from 'react';
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

    const MAX_TITLE_LENGTH = 120;

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const trimmedTitle = title.trim();

    const validationError = useMemo(() => {
        if (trimmedTitle.length === 0) return 'Please enter a todo.';
        if (trimmedTitle.length > MAX_TITLE_LENGTH) return `Keep it under ${MAX_TITLE_LENGTH} characters.`;
        return '';
    }, [trimmedTitle]);

    const isValid = validationError.length === 0;

    /**
     * @param {string} nextValue
     */
    function handleChange(nextValue) {
        setTitle(nextValue);

        // Keep UX gentle: once the user starts typing again, remove any previous submit error.
        // Validation will still be enforced on submit.
        if (error) setError('');
    }

    /**
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    function handleSubmit(e) {
        e.preventDefault();

        if (!isValid) {
            setError(validationError);
            return;
        }

        onAddTodo(trimmedTitle);
        setTitle('');
        setError('');
    }

    const errorId = 'todo-title-error';

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit} noValidate>
                <TextInput
                    value={title}
                    onChange={handleChange}
                    placeholder="What needs doing?"
                    ariaLabel="Todo title"
                    maxLength={MAX_TITLE_LENGTH}
                    className={error ? 'text-input--error' : ''}
                />
                <Button type="submit" variant="primary" ariaLabel="Add todo">
                    Add
                </Button>
            </form>

            {error ? (
                <p
                    id={errorId}
                    className="form-error"
                    role="alert"
                    aria-live="polite"
                >
                    {error}
                </p>
            ) : null}
        </div>
    );
}

export default TodoForm;
