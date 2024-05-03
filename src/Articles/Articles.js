import './Articles.css';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import waves from '../assets/waves.png';
import { useNavigate } from 'react-router-dom';

function Articles({ articles }) {
    const [homeNews, setHomeNews] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        showArticles()
    }, [articles])

    const getDate = (articleDate) => {
        var date = moment(articleDate).format('MMMM Do, YYYY h:mma')
        return date
    }

    const selectArticle = (articleId) => {
        navigate(`/${articleId}`)
    }

    const showArticles = () => {
        const allArticles = articles.map((article) => {
            return (
                <div className='article' key={article.publishedAt} onClick={() => selectArticle(article.publishedAt)}>
                    <img src={article.urlToImage ? article.urlToImage : waves} alt='article-image' className='article-image' />
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
        <article className='articles-container'>
            {homeNews}
        </article>
    )
}

export default Articles;