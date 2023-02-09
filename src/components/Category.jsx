import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const keyword = '';
const API_KEY = import.meta.env.VITE_apiKey;

const Category = () => {
  const [news, setNews] = useState([]);
  let { cat_name } = useParams();
  // const [searchTerm, setSearchTerm] = useState('');
  const FEATURED_API = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  const CAT_API = `https://newsapi.org/v2/top-headlines?country=tr&category=${cat_name}&apiKey=${API_KEY}`;
  const SEARCH_API = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;
 
  useEffect(() => {
    if(cat_name) {
      axios
      .get(CAT_API)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.error(err))
    }
  }, [cat_name])

  return (
    <>
      <div className="container my-3">
        <h2 className="text-uppercase">{cat_name}</h2>
        <div className="container d-flex flex-column justify-content-center align-items-center my-3">
          {news
            ? news.map((items,i) => (
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
                        loading='lazy'
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
