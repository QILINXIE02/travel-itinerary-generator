import React from 'react';

const Recommendations = () => {
  const fetchedRecommendations = [
    { id: 1, name: 'Local Museum Tour', description: 'Explore the city\'s rich history in a guided museum tour.' },
    { id: 2, name: 'Adventure Park Visit', description: 'Enjoy thrilling rides and activities at the adventure park.' },
    { id: 3, name: 'Culinary Workshop', description: 'Learn to cook local dishes in a hands-on culinary workshop.' },
  ];

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {fetchedRecommendations.map(recommendation => (
          <li key={recommendation.id}>
            <strong>{recommendation.name}</strong>: {recommendation.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
