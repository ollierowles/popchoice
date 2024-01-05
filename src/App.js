import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import RecommendationPage from './components/RecommendationPage';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/" exact element={<QuestionPage />} />
            <Route path="/recommendation" element={<RecommendationPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
