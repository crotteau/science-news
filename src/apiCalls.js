async function getArticles(country) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const articles = await response.json()
    return articles
}

export {
    getArticles
}