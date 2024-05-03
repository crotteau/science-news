import './Home.css';
import React from 'react';
import Articles from '../Articles/Articles';
import Country from '../Country/Country';
import cluster2 from '../assets/design2.png';
import cluster1 from '../assets/design1.png';
import rainbow from '../assets/rainbow.png';

function Home({ articles, setCountry }) {

    return (
        <section className='home'>
            <header>
                <h2 className='home-header'>SCIENCE NEWS</h2>
                <img src={rainbow} className='rainbow'/>
                <img src={cluster2} className='cluster2'/>
                <img src={cluster1} className='cluster1'/>
            </header>
            <Country setCountry={setCountry} />
            <Articles articles={articles} />
        </section>
    )
}

export default Home;
