import React, { useState } from 'react';

const DestinationExplorer = () => {
  const [interests, setInterests] = useState([]);
  const [suggestedDestinations, setSuggestedDestinations] = useState([]);

  const handleInterestChange = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleExploreDestinations = () => {
    // Simulate fetching suggested destinations based on interests
    const destinations = [
      { id: 1, name: 'Mountains Adventure', description: 'Explore scenic mountain trails and activities.' },
      { id: 2, name: 'Historical Tour', description: 'Visit historical landmarks and learn about local culture.' },
      { id: 3, name: 'Culinary Delights', description: 'Enjoy local cuisine and culinary experiences.' },
    ];
    setSuggestedDestinations(destinations);
  };

  return (
    <div>
      <h2>Explore Destinations</h2>
      <div>
        <h3>Select Your Interests:</h3>
        <label>
          <input
            type="checkbox"
            checked={interests.includes('adventure')}
            onChange={() => handleInterestChange('adventure')}
          />{' '}
          Adventure Sports
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={interests.includes('history')}
            onChange={() => handleInterestChange('history')}
          />{' '}
          Historical Sites
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={interests.includes('culinary')}
            onChange={() => handleInterestChange('culinary')}
          />{' '}
          Culinary Experiences
        </label>
        <br />
        <button onClick={handleExploreDestinations}>Explore Destinations</button>
      </div>
      <div>
        <h3>Suggested Destinations:</h3>
        <ul>
          {suggestedDestinations.map((destination) => (
            <li key={destination.id}>
              <h4>{destination.name}</h4>
              <p>{destination.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationExplorer;
