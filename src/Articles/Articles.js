import './Articles.css';
import moment from 'moment';
import React, { useState, useEffect } from 'react';

function Articles({ articles }) {
    const [homeNews, setHomeNews] = useState([])

    useEffect(() => {
        showArticles()
    }, [articles])

    const getDate = (article) => {
        const date = moment.utc(article.publishedAt).format('MMMM Do, YYYY h:mma')
        return date
    }

    const showArticles = () => {
        const allArticles = articles.map((article) => {
            return (
                <div className='article' key={article.publishedAt}>
                    <img src={article.urlToImage} alt='article-image' className='article-image' />
                    <section className='article-info'>
                        <p className='article-title'>{article.title}</p>
                        <p className='article-date'>{getDate(article.publishedAt)}</p>
                        <p className='article-description'>{article.description}</p>
                    </section>
                </div>
            )
        })
        setHomeNews(allArticles)
    }

    return (
        <React.Fragment>
            {homeNews}
        </React.Fragment>
    )
}

export default Articles;