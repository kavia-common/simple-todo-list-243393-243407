import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Card from './components/ui/Card';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';

/**
 * @typedef {{
 *   id: string,
 *   title: string,
 *   completed: boolean
 * }} Todo
 */

/**
 * Generate a stable-ish id without dependencies.
 *
 * @return {string}
 */
function createId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Main application component.
 *
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function App() {
    const [theme, setTheme] = useState('light');
    const [todos, setTodos] = useState(() => ([
        { id: createId(), title: 'Add your first task', completed: false },
        { id: createId(), title: 'Mark it done', completed: true },
    ]));
    const [query, setQuery] = useState('');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const remainingCount = useMemo(() => {
        return todos.filter((t) => !t.completed).length;
    }, [todos]);

    const filteredTodos = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return todos;
        return todos.filter((t) => t.title.toLowerCase().includes(q));
    }, [todos, query]);

    /**
     * Toggle between light/dark theme.
     */
    // PUBLIC_INTERFACE
    function toggleTheme() {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    /**
     * @param {string} title
     */
    // PUBLIC_INTERFACE
    function addTodo(title) {
        setTodos((prev) => [{ id: createId(), title, completed: false }, ...prev]);
    }

    /**
     * @param {string} id
     */
    // PUBLIC_INTERFACE
    function toggleTodo(id) {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
        );
    }

    /**
     * @param {string} id
     */
    // PUBLIC_INTERFACE
    function deleteTodo(id) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    }

    return (
        <div className="App">
            <main className="page">
                <Card className="panel">
                    <TodoHeader theme={theme} onToggleTheme={toggleTheme} />
                    <TodoForm onAddTodo={addTodo} />
                    <TodoSearch value={query} onChange={setQuery} />

                    <div className="todo-meta" aria-live="polite">
                        <span>{remainingCount} remaining</span>
                        <span>
                            {filteredTodos.length} shown / {todos.length} total
                        </span>
                    </div>

                    {todos.length === 0 ? (
                        <p className="empty">No todos yet. Add one above.</p>
                    ) : filteredTodos.length === 0 ? (
                        <p className="empty">No matches. Try a different search.</p>
                    ) : (
                        <ul className="todo-list" aria-label="Todo list">
                            {filteredTodos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={toggleTodo}
                                    onDelete={deleteTodo}
                                />
                            ))}
                        </ul>
                    )}
                </Card>
            </main>
        </div>
    );
}

export default App;
