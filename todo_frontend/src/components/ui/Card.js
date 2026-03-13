import React from 'react';

/**
 * Simple card container.
 *
 * @param {{
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 * @return {JSX.Element}
 */
// PUBLIC_INTERFACE
function Card(props) {
    const { children, className = '' } = props;

    return <div className={['card', className].filter(Boolean).join(' ')}>{children}</div>;
}

export default Card;
