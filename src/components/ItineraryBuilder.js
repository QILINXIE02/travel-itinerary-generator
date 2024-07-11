import React, { useState } from 'react';

const ItineraryBuilder = () => {
  const [travelDates, setTravelDates] = useState({});
  const [itinerary, setItinerary] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTravelDates({ ...travelDates, [name]: value });
  };

  const generateItinerary = () => {
    const generatedItinerary = [
      {
        day: 'Day 1',
        activities: ['Morning: Visit Museum', 'Afternoon: Explore Old Town', 'Evening: Dinner at Local Restaurant'],
      },
      {
        day: 'Day 2',
        activities: ['Morning: Hiking in National Park', 'Afternoon: Picnic by the Lake', 'Evening: Cultural Show'],
      },
    ];
    setItinerary(generatedItinerary);
  };

  return (
    <div>
      <h2>Build Your Itinerary</h2>
      <div>
        <label>
          Travel Start Date:
          <input type="date" name="startDate" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Travel End Date:
          <input type="date" name="endDate" onChange={handleInputChange} />
        </label>
        <br />
        <button onClick={generateItinerary}>Generate Itinerary</button>
      </div>
      <div>
        <h3>Generated Itinerary:</h3>
        <ul>
          {itinerary.map((day) => (
            <li key={day.day}>
              <h4>{day.day}</h4>
              <ul>
                {day.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
