import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import Articles from '../Articles/Articles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
