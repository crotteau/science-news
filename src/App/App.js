import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import ArticleDetails from '../ArticleDetails/ArticlesDetails';
import scienceArticles from '../mockdata';
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
    setArticles(scienceArticles.articles)
    // try {
    //   const response = await getArticles(country)
    //   if (response) {
    //     setArticles(response.articles)
    //   }
    // } catch (error) {
    //   setError(error)
    // }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home articles={articles} />}></Route>
          <Route path="/:id" element={<ArticleDetails articles={articles} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {
//   "source": {
//       "id": "cnn",
//       "name": "CNN"
//   },
//   "author": "Ashley Strickland",
//   "title": "Scientists say they’ve traced the origins of a potentially hazardous near-Earth asteroid to the far side of the moon - CNN",
//   "description": "Rare near-Earth asteroid Kamo’oalewa may have been created several million years ago when something slammed into the moon and sent a chunk of it flying into space.",
//   "url": "https://www.cnn.com/2024/05/01/world/lunar-crater-asteroid-scn/index.html",
//   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/bruno.jpg?c=16x9&q=w_800,c_fill",
//   "publishedAt": "2024-05-01T19:29:00Z",
//   "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAn unusual asteroid traveling near Earth is thought to… [+7084 chars]"
// }