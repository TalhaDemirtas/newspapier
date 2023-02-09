import { useState, useEffect } from 'react';
import axios from 'axios';

const cat_name = 'general';
const keyword = '';
const API_KEY = import.meta.env.VITE_apiKey;

const FetchData = ({ cat_name }) => {
  const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  const FEATURED_API = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  const CAT_API = `https://newsapi.org/v2/top-headlines?country=tr&category=${cat_name}&apiKey=${API_KEY}`;
  const SEARCH_API = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=f7b7bdf7c059418ca9e21e89ead3e1a1`;
  console.log('cat name', cat_name);
  const getNews = async () => {
    await axios
      .get(cat_name ? CAT_API : FEATURED_API)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
    // .finally(() => setLoading(false));
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="container my-3">
        <h3>Top Headlines</h3>
        <div className="container d-flex flex-column justify-content-center align-items-center my-3">
          {news
            ? news.map((items, index) => (
                <>
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
                </>
              ))
            : 'LOADING...'}
        </div>
      </div>
    </>
  );
};

export default FetchData;
