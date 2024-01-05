import testPoster from "../imgs/test-poster.png"

import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecommendationPage() {
  const navigate = useNavigate();

  const handleGoAgainClick = () => {
    navigate('/');
  };

  return (
    <div className='recommendation-container'>
      <h2>The Martian (2015)</h2>
      <img src={testPoster} className="Recommendation-poster" alt="poster" />
      <p>The inspiring story of an astronaut stranded on Mars who needs to rely on his ingenuity to come back to Earth</p>
      <button onClick={handleGoAgainClick}>Go Again</button>
    </div>
  );
}

export default RecommendationPage;
