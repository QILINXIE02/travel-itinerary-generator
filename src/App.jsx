import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DestinationExplorer from './components/DestinationExplorer';
import ItineraryBuilder from './components/ItineraryBuilder';
import BudgetCalculator from './components/BudgetCalculator';
import WeatherForecast from './components/WeatherForecast';
import OfflineAccess from './components/OfflineAccess';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Travel Itinerary Generator</h1>} />
        <Route path="/explore-destinations" element={<DestinationExplorer />} />
        <Route path="/create-itinerary" element={<ItineraryBuilder />} />
        <Route path="/estimate-budget" element={<BudgetCalculator />} />
        <Route path="/check-weather" element={<WeatherForecast />} />
        <Route path="/offline-access" element={<OfflineAccess />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
