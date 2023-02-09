import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';

import { SearchContext } from '../context';

const API_KEY = import.meta.env.VITE_apiKey;

const Category = () => {
  const [news, setNews] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  let { cat_name } = useParams();

  const NEWS_API_URL = new URL('https://newsapi.org/v2/');

  const TOP_HEADLINES_API_URL = new URL('top-headlines', NEWS_API_URL);
  TOP_HEADLINES_API_URL.searchParams.set('apiKey', API_KEY);
  TOP_HEADLINES_API_URL.searchParams.set('country', 'tr');

  const EVERYTHING_API_URL = new URL('everything', NEWS_API_URL);
  EVERYTHING_API_URL.searchParams.set('apiKey', API_KEY);

  useEffect(() => {
    if (!searchTerm) {
      TOP_HEADLINES_API_URL.searchParams.delete('category');

      axios
        .get(TOP_HEADLINES_API_URL.toString())
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  useEffect(() => {
    if (cat_name) {
      TOP_HEADLINES_API_URL.searchParams.set('category', cat_name);

      axios
        .get(TOP_HEADLINES_API_URL.toString())
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));

      return;
    }
  }, [cat_name]);

  useEffect(() => {
    if (searchTerm) {
      EVERYTHING_API_URL.searchParams.set('q', searchTerm);

      axios
        .get(EVERYTHING_API_URL.toString())
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));

      return;
    }
  }, [searchTerm]);

  return (
    <>
      <div className="container my-3">
        <h2 className="text-uppercase">{cat_name}</h2>
        <div className="container d-flex flex-column justify-content-center align-items-center my-3">
          {news
            ? news.map((items, i) => (
                <div key={i}>
                  <div
                    className="container my-3 p-3"
                    style={{
                      width: '600px',
                      boxShadow: '2px 2px 10px silver',
                      borderRadius: '10px',
                    }}
                  >
                    <h5>{items.title}</h5>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={items.urlToImage}
                        className="img-fluid"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                        }}
                        alt="Image Not Found"
                      />
                    </div>
                    <p className="my-1">{items.description}</p>
                    <a href={items.url} target="_blank">
                      View More
                    </a>
                  </div>
                </div>
              ))
            : 'LOADING...'}
        </div>
      </div>
    </>
  );
};

export default Category;
