import React from 'react';
import Button from './ui/Button';

/**
 * Header for the todo page.
 *
 * @param {{
 *   theme: 'light'|'dark',
 *   onToggleTheme: () => void,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function TodoHeader(props) {
    const { theme, onToggleTheme } = props;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    return (
        <div className="todo-header">
            <div>
                <h1 className="title">Retro Todo</h1>
                <p className="subtitle">Add, complete, and delete tasks.</p>
            </div>

            <Button
                variant="secondary"
                size="sm"
                onClick={onToggleTheme}
                ariaLabel={`Switch to ${nextTheme} mode`}
            >
                {nextTheme === 'dark' ? 'Dark' : 'Light'}
            </Button>
        </div>
    );
}

export default TodoHeader;
