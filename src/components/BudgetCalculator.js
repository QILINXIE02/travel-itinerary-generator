import React, { useState } from 'react';

const BudgetCalculator = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState({});

  const handleBudgetChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const calculateExpenses = () => {
    const calculatedExpenses = {
      flights: 500,
      accommodations: 800,
      activities: 300,
      dining: 200,
    };
    setExpenses(calculatedExpenses);
  };

  return (
    <div>
      <h2>Calculate Your Budget</h2>
      <div>
        <label>
          Budget:
          <input type="number" value={budget} onChange={handleBudgetChange} />
        </label>
        <br />
        <button onClick={calculateExpenses}>Calculate Expenses</button>
      </div>
      <div>
        <h3>Estimated Expenses:</h3>
        <ul>
          <li>Flights: ${expenses.flights}</li>
          <li>Accommodations: ${expenses.accommodations}</li>
          <li>Activities: ${expenses.activities}</li>
          <li>Dining: ${expenses.dining}</li>
          <li>
            <strong>Total: ${Object.values(expenses).reduce((acc, val) => acc + val, 0)}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BudgetCalculator;
