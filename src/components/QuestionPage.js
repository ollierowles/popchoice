import logo from '../imgs/logo.png'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionsPage() {
  const [answers, setAnswers] = useState(['', '', '']);
  const navigate = useNavigate();

  const handleAnswerChange = (index, value) => {
    setAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[index] = value;
        return newAnswers;
    })
  }

  const handleLetsGoClick = () => {
    navigate('/recommendation');
  };

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
          onChange={(e) => handleAnswerChange(1, e.target.value)}
          ></input>          </div>
        </div>
        <button onClick={handleLetsGoClick}>Lets Go</button>
    </div>
  );
}

export default QuestionsPage;
