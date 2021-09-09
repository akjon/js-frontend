import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "#000",
  text: "I'm a button",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
