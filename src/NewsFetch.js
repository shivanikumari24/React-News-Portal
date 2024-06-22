import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleList from './ArticleList';
import './style.css';
const NewsFetch = () => {

  const API_URL = 'https://newsapi.org/v2/everything';
  const API_KEY = '400118791b584e57a134b5fc9d52ab5e';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("General News");

  useEffect(() => {
    fetchData("all");
  }, []);

  async function fetchData(selectedCategory) {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: `${selectedCategory}`,
          apiKey: API_KEY
        }
      });

      setTitle(selectedCategory)
      const filteredArticles = response.data.articles.filter(article =>
        article.title && article.description && article.content && article.url && article.urlToImage
      );
      setArticles(filteredArticles);

      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error.message)
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <>
      <div className='container'>

        <div className='news-container'>
          <h1>{title.toLocaleUpperCase()}</h1>
          <div className='news-sub-container'>
            <ArticleList fetchData={fetchData} /> 
            <button className='backbutton'><Link to={'/'}>Go back to stories..</Link></button>

            <ul className='news-list'>
              {articles.slice(3, 15).map((article, index) => (
                <li key={index}>
                  <div className='content-container'>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" >
                      {article.title}
                    </a>

                    <p>{article.description}</p>
                    <p>{article.content}</p>
                  </div>
                  <div className='img-container'>
                    <img src={article.urlToImage} alt=''></img>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default NewsFetch;