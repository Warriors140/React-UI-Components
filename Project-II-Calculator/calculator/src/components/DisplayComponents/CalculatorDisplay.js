import React from 'react';
import './Display.css';


function CalculatorDisplay (props) {
    return (
        <div className= 'total'>{props.text}</div>
    )
}

export default CalculatorDisplay