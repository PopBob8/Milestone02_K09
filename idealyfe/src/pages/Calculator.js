import React from 'react';
import './Calculator.css';
import BMI from '../components/BMI';

const Calculator = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <div className="header_container">
                    <h1><b>BMI Calculator</b></h1>
                    <p>Calculate Your <b>Body Mass Index</b></p>
                </div>
            </div>

            {/* Calculator Section */}
            <div className="calculator">
                <div className="calculator_container">
                    <BMI />
                </div>
            </div>
        </div>
    )
}

export default Calculator;