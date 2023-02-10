import { useEffect,useState } from 'react';
import { NewsService } from '../service';
import Carousel from 'react-bootstrap/Carousel';
import Category from './Category';

const service = new NewsService();
// service.pageSize = 3;

const Home = () => {
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    service
      .getTopHeadlines()
      .then((res) => setTopNews(res.data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='container my-3'>
    <h2>Home</h2>
      <Carousel>
        {topNews.slice(0, 3).map((item,i) => (
          <Carousel.Item key={i}>
            <img
              loading="lazy"
              className="d-block rounded mx-auto"
              src={item.urlToImage}
              alt="caro"
              style={{
                height:"75vh",
                aspectRatio:"16/9"
              }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Category />
    </div>
  );
};

export default Home;
