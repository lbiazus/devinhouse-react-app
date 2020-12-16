import React from 'react';

const Section = props => {
    const { titulo, children } = props;

    return (
        <div className="section">
            <h2>{titulo}</h2>
            {children}
        </div>
    )
}

export default Section;