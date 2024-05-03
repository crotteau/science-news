// async function getArticles(country) {
//     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=1bd01d8f01ff4939a3f857a54b3b32f2`)
//     if (!response.ok) {
//         throw new Error(`An error has occurred: ${response.status}`)
//     }
//     const articles = await response.json()
//     return articles
// }

// export {
//     getArticles
// }