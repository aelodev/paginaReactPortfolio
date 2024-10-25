import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/ExpandableCard.css';

function ExpandableCard({ width, height, color, title, children, className }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isExpanded && <div className="overlay" onClick={toggleExpand}></div>}
            <div
                className={`card ${className} ${isExpanded ? 'expanded' : ''}`}
                style={{ '--color': color, width: isExpanded ? '80%' : width, height: isExpanded ? '80%' : height }}
                onClick={toggleExpand}
            >
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="text">
                    {children}
                </div>
                {!isExpanded && <p style={{ color: '#007bff' }}>...</p>}
            </div>
        </>
    );
}

ExpandableCard.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default ExpandableCard;