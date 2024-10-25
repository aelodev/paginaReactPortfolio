import PropTypes from "prop-types";

SVGImage.propTypes = {
    SVGFunction: PropTypes.func.isRequired,
}

function SVGImage({SVGFunction : SVGComponent}) {
    return (
        <div style={{width: 200, height: 200}}>
            <SVGComponent className="text-9xl"/>
        </div>
    )
}

export default SVGImage;