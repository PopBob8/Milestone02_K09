import React from 'react';
import './Calculator.css';
import BMI from '../components/BMI';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Calculator = () => {
    return (
        <div>
            <Navbar />
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

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Calculator;