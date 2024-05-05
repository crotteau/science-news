# Science News

## About
A simple web application that displays top science news headlines from [NewsAPI](https://newsapi.org/). The default is for US news, but there is an option to display top science news from other countries as well.

## Contributor
- [Megan Crotteau](https://github.com/crotteau)

## Preview
<img width="1665" alt="Screenshot 2024-05-05 at 1 12 56 PM" src="https://github.com/crotteau/science-news/assets/149750476/e14ba6e8-c879-4c24-8f0d-3a641dd39db2">
<img width="1676" alt="Screenshot 2024-05-03 at 5 18 10 PM" src="https://github.com/crotteau/science-news/assets/149750476/4021fa97-5e5a-4ded-8295-59e6c5d66c71">


## Technologies Used
<div>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' alt='javascript'/>
  <img src='https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white' alt='html'/>
  <img src='https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black' alt='react'/>
  <img src='https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white' alt='react-router'/>
</div>

## Local Use
If you are cloning this to your computer, you'll need an API key. Requesting one is quick and easy! You can do so [here]((https://newsapi.org/)). Once you receive your API key (it should be fairly quick), vist the apiCalls.js file and replace `${process.env.REACT_APP_NEWS_API_KEY}` with your key.

  
## Background
The goal of this project was to simulate a code challenge I may encounter during the interview process. I spent ~8hrs creating a React app that displays news articles, article details, and implemented a feature that fetched new data based on user input. 

## Challenges and Wins
Due to the time constraints of this project, I focused on creating an MVP and initially found I had to scale back the scope of my application. Ultimately, I was able to create an application that is easy to use and showcases a basic React app with multi-page UI.

## Potential Enhancements
- dynamic CSS for mobile display
- search feature for more specific science categories
- testing with Cypress and implementing PropTypes
