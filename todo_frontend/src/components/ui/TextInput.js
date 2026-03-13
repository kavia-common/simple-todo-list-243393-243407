import React from 'react';

/**
 * Reusable text input.
 *
 * @param {{
 *   value: string,
 *   onChange: (value: string) => void,
 *   placeholder?: string,
 *   ariaLabel: string,
 *   className?: string,
 *   disabled?: boolean,
 *   maxLength?: number,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function TextInput(props) {
    const {
        value,
        onChange,
        placeholder = '',
        ariaLabel,
        className = '',
        disabled = false,
        maxLength,
    } = props;

    return (
        <input
            className={['text-input', className].filter(Boolean).join(' ')}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label={ariaLabel}
            disabled={disabled}
            maxLength={maxLength}
        />
    );
}

export default TextInput;
