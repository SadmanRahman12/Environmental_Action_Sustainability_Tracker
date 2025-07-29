import React, { useState } from 'react';
import './CarbonCalculator.css';

const CarbonCalculator = () => {
  const [transportation, setTransportation] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [diet, setDiet] = useState(0);
  const [shopping, setShopping] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const newTotal = transportation + energy + diet + shopping;
    setTotal(newTotal);
  };

  return (
    <div className="carbon-calculator">
      <h2>Advanced Carbon Footprint Calculator</h2>
      <div className="form-group">
        <label>Transportation (miles per month):</label>
        <input type="number" value={transportation} onChange={(e) => setTransportation(parseFloat(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Home Energy (kWh per month):</label>
        <input type="number" value={energy} onChange={(e) => setEnergy(parseFloat(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Diet (e.g., meat consumption in lbs per month):</label>
        <input type="number" value={diet} onChange={(e) => setDiet(parseFloat(e.target.value))} />
      </div>
      <div className="form-group">
        <label>Shopping (e.g., new items per month):</label>
        <input type="number" value={shopping} onChange={(e) => setShopping(parseFloat(e.target.value))} />
      </div>
      <button onClick={calculateTotal}>Calculate</button>
      {total > 0 && (
        <div className="results">
          <h3>Your Estimated Carbon Footprint: {total.toFixed(2)} kg CO2e per month</h3>
        </div>
      )}
    </div>
  );
};

export default CarbonCalculator;
