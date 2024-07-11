import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DestinationExplorer from './components/DestinationExplorer';
import ItineraryBuilder from './components/ItineraryBuilder';
import BudgetCalculator from './components/BudgetCalculator';
import WeatherForecast from './components/WeatherForecast';
import OfflineAccess from './components/OfflineAccess';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore-destinations">Explore Destinations</Link>
            </li>
            <li>
              <Link to="/create-itinerary">Itinerary Builder</Link>
            </li>
            <li>
              <Link to="/estimate-budget">Budget Calculator</Link>
            </li>
            <li>
              <Link to="/check-weather">Weather Forecast</Link>
            </li>
            <li>
              <Link to="/offline-access">Offline Access</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore-destinations" element={<DestinationExplorer />} />
            <Route path="/create-itinerary" element={<ItineraryBuilder />} />
            <Route path="/estimate-budget" element={<BudgetCalculator />} />
            <Route path="/check-weather" element={<WeatherForecast />} />
            <Route path="/offline-access" element={<OfflineAccess />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Travel Itinerary Generator</h1>
      <p>Your one-stop solution for planning the perfect trip. Explore destinations, build detailed itineraries, calculate your travel budget, check weather forecasts, access offline travel plans, and get personalized recommendations for attractions and activities.</p>
    </div>
  );
}

export default App;
