import './ArticleDetails.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import waves from '../assets/waves.png'

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
                </div>
            </section>
            <p className='article-details-content'>{a.content}</p>
            <a href={a.url} className='article-details-url'>View Full Article</a>
            <button onClick={() => { navigate('/') }}> Go Back </button>
        </article>
    )

}

export default ArticleDetails;

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