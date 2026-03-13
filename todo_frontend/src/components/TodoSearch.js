import React from 'react';
import TextInput from './ui/TextInput';

/**
 * Search box for filtering todos.
 *
 * @param {{
 *   value: string,
 *   onChange: (value: string) => void,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function TodoSearch(props) {
    const { value, onChange } = props;

    return (
        <TextInput
            value={value}
            onChange={onChange}
            placeholder="Search todos…"
            ariaLabel="Search todos"
        />
    );
}

export default TodoSearch;
