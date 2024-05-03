import './Home.css';
import React, { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import Country from '../Country/Country';


function Home({ articles, setCountry }) {
    const [headliner, setHeadliner] = useState({})

   
    return (
        <section className='home'>
            <h2>Science News!!</h2>
            <Country setCountry={setCountry} />
            <Articles articles={articles} />
        </section>
    )
}

export default Home;

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