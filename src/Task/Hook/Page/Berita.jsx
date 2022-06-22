import axios from 'axios';
import React from 'react';
import '../css/Style.css';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Navbar from '../../Component/Navbar';

const Portalnews = () => {
  const [search, setSearch] = useState('');
  const [load, setLoading] = useState(false);
  const [querySearch] = useDebounce(search, 1000);
  const [news, setNews] = useState([]);

  const newUrl = 'https://newsdata.io/api/1/news?apikey=pub_84157f3c9355e63b848476ccc75fadc35eb1&q=social&country=id,sg';
  const [api, setApi] = useState(newUrl);

  useEffect(() => {
    if (querySearch.length > 0) {
      try {
        setLoading(true);
        setApi(`https://newsdata.io/api/1/news?apikey=pub_84157f3c9355e63b848476ccc75fadc35eb1&q=${querySearch}`);
        setLoading(false);
      } catch (er) {
        setLoading(false);
        console.log(er, 'error dari newsAPI ini');
      }
    }
  }, [querySearch]);

  const getToApi = useCallback(() => {
    axios.get(api).then((res) => setNews(res.data.results));
  }, [api]);

  useEffect(() => {
    getToApi();
  }, [getToApi]);
  return (
    <div>
      <Navbar value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <div className="container-fluid px-lg-5">
        <div className="row justify-content-center pt">
          {load && <div>Loading....</div>}
          {!load &&
            news &&
            news.map((news, indx) => (
              <div key={indx} className="col-lg-4 col-md-6 d-flex">
                <div className="blog-card">
                  <div className="meta">
                    <div className="photo">
                      <h3 className="text-center">{news.category}</h3>
                      <img src={news.image_url} alt="" />
                    </div>
                  </div>
                  <div className="description">
                    <h1>{news.title}</h1>
                    <h2 className="text-primary fw-bold">{news.pubDate}</h2>
                    <h2 className="pt-1 pb-4">{news.description}</h2>
                    <p className="read-more">
                      <a href={news.link} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portalnews;
