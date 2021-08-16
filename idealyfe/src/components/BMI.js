import { useState } from "react";
import { Helmet } from 'react-helmet';
import './BMI.css';


export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "UNDERWEIGHT";
    else if (bmi >= 18.5 && bmi < 24.9) return "NORMAL";
    else if (bmi >= 25 && bmi < 29.9) return "OVERWEIGHT";
    else return "OBESITAS";
  }

  return (
    <div className="calculator">
      <Helmet>
        <style>{'body { background-color: #56CCF2; }'}</style>
      </Helmet>
      <div className="w-full max-w-xs m-10 center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center mb-4 text-xl"><b>BMI Calculator</b></h1>
          
          {/* Input Tinggi Badan */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Tinggi Badan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Height "
              type="text"
              placeholder="Tinggi (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          
          {/* Input Berat Badan */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Berat Badan
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Weight"
              type="Weight in kg"
              placeholder="Berat badan (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
            >
              Hitung BMI
            </button>
          </div>
          
          {/* Result */}
          {bmiResult && (
            <div className="mt-4">
              <p>BMI: {bmiResult} </p>
              <h3>{status}</h3>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}