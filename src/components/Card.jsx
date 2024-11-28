import PropTypes from "prop-types";
import { CgOverflow } from "react-icons/cg";

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

function Card({ width, height, title = null, children, color = "rgba(128, 0, 128, 0.5)", className = '' }) {
  const cardStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#383838", // Adjust background color transparency
    padding: "1rem",
    display: "block",
    border: "1px solid #5b5b5b",
    borderRadius: "0.5rem",
    boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}` // Apply neon color
  };

  return (
    <div className={`card ${className}`} style={{ ...cardStyle, width, height }}>
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default Card;
