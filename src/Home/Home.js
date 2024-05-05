import './Home.css';
import React from 'react';
import Articles from '../Articles/Articles';
import Country from '../Country/Country';
import rainbow from '../assets/rainbow.png';

function Home({ articles, setCountry }) {

    return (
        <section className='home'>
            <header style={{ backgroundImage: `url(${rainbow})` }}>
                <h2 className='home-header'>SCIENCE NEWS</h2>
                <img src={rainbow} className='rainbow' />
            </header>
            <Country setCountry={setCountry} />
            <Articles articles={articles} />
        </section>
    )
}

export default Home;
