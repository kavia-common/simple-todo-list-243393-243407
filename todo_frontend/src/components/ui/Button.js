import React from 'react';

/**
 * Reusable button component.
 *
 * @param {{
 *   children: React.ReactNode,
 *   variant?: 'primary'|'secondary'|'danger',
 *   size?: 'sm'|'md',
 *   type?: 'button'|'submit'|'reset',
 *   disabled?: boolean,
 *   className?: string,
 *   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
 *   ariaLabel?: string,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function Button(props) {
    const {
        children,
        variant = 'primary',
        size = 'md',
        type = 'button',
        disabled = false,
        className = '',
        onClick,
        ariaLabel,
    } = props;

    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        disabled ? 'btn--disabled' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;
