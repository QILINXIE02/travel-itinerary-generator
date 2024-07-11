import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DestinationExplorer from './components/DestinationExplorer';
import ItineraryBuilder from './components/ItineraryBuilder';
import BudgetCalculator from './components/BudgetCalculator';
import WeatherForecast from './components/WeatherForecast';
import OfflineAccess from './components/OfflineAccess';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore-destinations">Explore Destinations</Link></li>
          <li><Link to="/create-itinerary">Create Itinerary</Link></li>
          <li><Link to="/estimate-budget">Estimate Budget</Link></li>
          <li><Link to="/check-weather">Check Weather</Link></li>
          <li><Link to="/offline-access">Offline Access</Link></li>
          <li><Link to="/recommendations">Recommendations</Link></li>
        </ul>
      </nav>
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
