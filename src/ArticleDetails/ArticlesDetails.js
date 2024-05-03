import './ArticleDetails.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import waves from '../assets/waves.png';

function ArticleDetails({ articles }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [a, setTargetArticle] = useState()

    useEffect(() => {
        if (articles) {
            displayArticle()
        }
    }, [articles])

    const getDate = (articleDate) => {
        var date = moment(articleDate).format('MMMM Do, YYYY h:mma')
        return date
    }

    const displayArticle = () => {
        const targetArticle = articles.find((article) => {
            return article.publishedAt === id
        })
        setTargetArticle(targetArticle)
    }

    if (!a) {
        return (
            <p className='loading'>Loading...</p>
        )
    }

    return (
        <article className='article-details'>
            <h2>{a.title}</h2>
            <section className='article-details-info'>
                <img src={a.urlToImage ? a.urlToImage : waves} alt='article-details-image' className='article-details-image' />
                <div>
                    <p className='article-details-source'>Source: {a.source.name}</p>
                    <p className='article-details-author'>Author: {a.author}</p>
                    <p className='article-details-date'>Date Published: {getDate(a.publishedAt)}</p>
                    <a href={a.url} className='article-details-url'>View Full Article</a>
                </div>
            </section>
            <p className='article-details-content'>{a.content}</p>
            <button onClick={() => { navigate('/') }}> Go Back </button>
        </article>
    )

}

export default ArticleDetails;