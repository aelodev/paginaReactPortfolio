import { useState } from "react";
import PropTypes from "prop-types";
import "../index.css"

WordNeonColor.propTypes = {
    word: PropTypes.string.isRequired,
    color: PropTypes.string,
    effect: PropTypes.bool,
};

function WordNeonColor({ word, color = "rgba(128, 0, 128, 0.5)", effect }) {
    const [isHovered, setIsHovered] = useState(false);

    const neonStyle = {
        textShadow: isHovered ? `0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color}` : "none",
        color: isHovered ? color : "inherit",
    };

    return (
        <span
            id="wordNeon"
            className={effect ? "fade-in" : ""}
            style={effect ? neonStyle : { textShadow: `0 0 10px ${color}`, color: color }}
            onMouseEnter={() => effect && setIsHovered(true)}
            onMouseLeave={() => effect && setIsHovered(false)}
        >
            {word}
        </span>
    );
}

export default WordNeonColor;