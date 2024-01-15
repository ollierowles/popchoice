import logo from '../imgs/logo.png'
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import openai from '../services/openaiConfig';
import supabase from '../services/supabaseConfig';
import { useOutputContext } from '../contexts/OutputContext';

function QuestionsPage() {
  const [questions, setQuestions] = useState([' Whats your favorite movie and why? ', ' Are you in the mood for something new or classic? ', ' Do you wanna have fun or do you want something serious? ']);
  const [answers, setAnswers] = useState(['', '', '']);
  const [formattedInput, setFormattedInput] = useState('original state');
  const [recommendationOutput, setRecommendationOutput] = useOutputContext();
  const navigate = useNavigate();

  const handleAnswerChange = (index, value) => {
    setAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = value;
        return newAnswers;
    })
  }

  useEffect(() => {
    formatInput(answers);
  }, [answers])

  function formatInput(input) {
    const concatenatedString = questions[0] + answers[0] + questions[1] + answers[1] + questions[2] + answers[2];
    setFormattedInput(concatenatedString);
  }


  const handleLetsGoClick = async () => {
    await getRecommendation();
    navigate(`/recommendation`)
  };

  const getRecommendation = async () => {
    console.log(formattedInput);
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: formattedInput,
    });

    const embedding = embeddingResponse.data[0].embedding;
    console.log(embedding);

    let { data, error } = await supabase
      .rpc('match_movies', {
        query_embedding: embedding,
        match_count: 1, 
        match_threshold: 0.2, 
      })
      if (error) console.error(error)
      else console.log(data);
      setRecommendationOutput(data[0].content);
  }


  return (
    <div className='question-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="question">
          <div className="question-title">
            What's your favorite movie and why?
          </div>
          <div className="question-input">
          <input 
          type="text"
          value={answers[0]}
          onChange={(e) => handleAnswerChange(0, e.target.value)}
          ></input>
          </div>
        </div>
        <div className="question">
          <div className="question-title">
            Are you in the mood for something new or classic?
          </div>
          <div className="question-input">
          <input 
          type="text"
          value={answers[1]}
          onChange={(e) => handleAnswerChange(1, e.target.value)}
          ></input>          </div>
        </div>
        <div className="question">
          <div className="question-title">
          Do you wanna have fun or do you want something serious?
          </div>
          <div className="question-input">
          <input 
          type="text"
          value={answers[2]}
          onChange={(e) => handleAnswerChange(2, e.target.value)}
          ></input>          </div>
        </div>
        <button onClick={handleLetsGoClick}>Lets Go</button>
    </div>
  );
}

export default QuestionsPage;
