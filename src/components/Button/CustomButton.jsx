import React from 'react';
import { getContrastingColor } from '../../utils/helpers'

const  CustomButton = ({ type, color, title, handleClick, customStyle }) => {
    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: color,
                color: getContrastingColor(color)
            }
        } else if (type === "outline") {
            return {
                borderWidth: '2px',
                borderColor: color,
                color: color
            }
        }
    }

    return (
        <Button
            className={`btn ${customStyle}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </Button>
    );
}

export default CustomButton;