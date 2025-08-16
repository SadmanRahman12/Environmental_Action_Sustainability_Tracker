import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './CarbonCalculator.css';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    transportation: '',
    energy: '',
    diet: '',
    shopping: ''
  });
  const [total, setTotal] = useState(null);
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const getTips = (results) => {
    const tips = [];
    if (results.transportation > 50) {
      tips.push('Consider using public transport, carpooling, or biking to reduce transportation emissions.');
    }
    if (results.energy > 100) {
      tips.push('Switch to energy-efficient appliances and remember to turn off lights when not in use.');
    }
    if (results.diet > 30) {
      tips.push('Reducing meat consumption, especially red meat, can significantly lower your dietary carbon footprint.');
    }
    if (results.shopping > 20) {
      tips.push('Try to buy fewer new items. Shopping secondhand or repairing items can make a big difference.');
    }
    if (tips.length === 0) {
      tips.push('You\'re doing great! Keep up the sustainable habits.');
    }
    return tips;
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    const { transportation, energy, diet, shopping } = formData;
    const transportationCO2 = (parseFloat(transportation) || 0) * 0.411;
    const energyCO2 = (parseFloat(energy) || 0) * 0.433;
    const dietCO2 = (parseFloat(diet) || 0) * 2.5;
    const shoppingCO2 = (parseFloat(shopping) || 0) * 5;
    
    const newTotal = transportationCO2 + energyCO2 + dietCO2 + shoppingCO2;
    const newResults = {
      transportation: transportationCO2,
      energy: energyCO2,
      diet: dietCO2,
      shopping: shoppingCO2,
    };

    setTotal(newTotal);
    setResults(newResults);
  };

  const chartData = {
    labels: ['Transportation', 'Energy', 'Diet', 'Shopping'],
    datasets: [
      {
        data: results ? [results.transportation, results.energy, results.diet, results.shopping] : [0, 0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="carbon-calculator-container">
      <header className="carbon-calculator-header">
        <h1>Carbon Footprint Calculator</h1>
        <p>Estimate your monthly CO2 emissions and get tips to reduce them.</p>
      </header>
      <form className="carbon-calculator-form" onSubmit={calculateTotal}>
        <div className="form-group">
          <label htmlFor="transportation">🚗 Transportation (miles per month):</label>
          <input 
            type="number" 
            id="transportation" 
            name="transportation" 
            value={formData.transportation} 
            onChange={handleChange} 
            placeholder="e.g., 200"
          />
        </div>
        <div className="form-group">
          <label htmlFor="energy">💡 Home Energy (kWh per month):</label>
          <input 
            type="number" 
            id="energy" 
            name="energy" 
            value={formData.energy} 
            onChange={handleChange} 
            placeholder="e.g., 750"
          />
        </div>
        <div className="form-group">
          <label htmlFor="diet">🍔 Diet (meat consumption in lbs per month):</label>
          <input 
            type="number" 
            id="diet" 
            name="diet" 
            value={formData.diet} 
            onChange={handleChange} 
            placeholder="e.g., 10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="shopping">🛍️ Shopping (new items per month):</label>
          <input 
            type="number" 
            id="shopping" 
            name="shopping" 
            value={formData.shopping} 
            onChange={handleChange} 
            placeholder="e.g., 5"
          />
        </div>
        <button type="submit" className="btn-calculate">Calculate My Footprint</button>
      </form>
      {total !== null && results && (
        <div className="results-container">
          <h3>Your Estimated Footprint: <span className="total-result">{total.toFixed(2)} kg CO2e</span></h3>
          <div className="results-breakdown">
            <div className="chart-container">
              <Doughnut data={chartData} />
            </div>
            <div className="tips-container">
              <h4>💡 Actionable Tips to Reduce Your Footprint:</h4>
              <ul>
                {getTips(results).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarbonCalculator;
