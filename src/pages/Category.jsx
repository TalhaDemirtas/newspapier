import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsService } from '../service';
import { SearchContext } from '../context';

const service = new NewsService();

const Category = () => {
  const [news, setNews] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  let { cat_name } = useParams();

  useEffect(() => {
    if (!searchTerm) {
      service
        .getTopHeadlines(cat_name)
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  useEffect(() => {
    if (cat_name) {
      service
        .getTopHeadlines(cat_name)
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));
    }
  }, [cat_name]);

  useEffect(() => {
    if (searchTerm) {
      service
        .getEverything(searchTerm)
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  return (
    <>
      <div className="container">
        <h2 className="text-capitalize">{cat_name}</h2>
        <div className="container d-flex justify-content-center flex-wrap">
          {news
            ? news.map((items, i) => (
                <div className="card w-75 h-50 mx-auto my-2" key={i}>
                  <a href={items.url}>
                    <img
                      className="card-img-top image-fluid rounded d-block"
                      src={
                        items.urlToImage
                          ? items.urlToImage
                          : 'https://via.placeholder.com/460x300?text=Image+Not+Found'
                      }
                      alt="Image"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">{items.description}</p>
                    <p className="card-text">
                      <a href={items.url} target="_blank">
                        View More
                      </a>
                      <hr />
                      <small className="text-muted">{items.publishedAt}</small>
                    </p>
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
