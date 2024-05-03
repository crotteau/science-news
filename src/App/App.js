import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticlesDetails';
import { getArticles } from '../apiCalls';

function App() {
  const [articles, setArticles] = useState([])
  const [country, setCountry] = useState('us')
  const [error, setError] = useState('')

  useEffect(() => {
    if (country) {
      findArticles(country)
    }
  }, [country])

  const findArticles = async (country) => {
    try {
      const response = await getArticles(country)
      if (response) {
        setArticles(response.articles)
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="App">
      {error && <h2 className="error">{error.message}</h2>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home articles={articles} setCountry={setCountry} />}></Route>
          <Route path="/:id" element={<ArticleDetails articles={articles} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;