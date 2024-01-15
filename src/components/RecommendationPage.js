import testPoster from "../imgs/poster.jpg"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutputContext } from "../contexts/OutputContext";

function RecommendationPage() {
  const navigate = useNavigate();
  const [llmOutput, setLlmOutput] = useOutputContext();

  const handleGoAgainClick = () => {
    navigate('/');
  };

  console.log(llmOutput.split('-'))

  return (
    <div className='recommendation-container'>
      {llmOutput.split(')')[0]})
      <img src={testPoster} className="Recommendation-poster" alt="poster" />
      <button onClick={handleGoAgainClick}>Go Again</button>
    </div>
  );
}

export default RecommendationPage;
