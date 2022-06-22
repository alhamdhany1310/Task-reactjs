import axios from 'axios';
import React from 'react';
import '../css/Anim.css';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
// import Nav from './Navbar';
import Navbar from '../../Component/Navbar';
const Wibu = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [query] = useDebounce(text, 1000);
  const [anim, setAnim] = useState([]);

  const jikanUrl = 'https://api.jikan.moe/v3/search/anime?q=naruto';
  const [url, setUrl] = useState(jikanUrl);

  useEffect(() => {
    if (query.length > 0) {
      try {
        setLoading(true);
        setUrl(`https://api.jikan.moe/v3/search/anime?q=${query}`);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error, 'error dari newsAPI ini');
      }
    }
  }, [query]);

  const getAPI = useCallback(() => {
    axios.get(url).then((rest) => setAnim(rest.data.results));
  }, [url]);

  useEffect(() => {
    getAPI();
  }, [getAPI]);

  //   useEffect(() => {
  //     async function searchAnime() {
  //       try {
  //         setLoading(true);
  //         const respons = await window.fetch(`${jikanUrl}?q=${query}`);
  //         const data = await respons.json();
  //         setAnim(data.results);
  //         //   console.log('ini respons dari API', data);
  //         setLoading(false);
  //       } catch (error) {
  //         setLoading(false);
  //         console.log(error, 'error dari newsAPI ini');
  //       }
  //     }
  //     searchAnime();
  //   }, [query]);
  return (
    <div>
      <div>
        <Navbar value={text} onChange={(e) => setText(e.target.value)} />
        {/* <Nav value={text} onChange={(e) => setText(e.target.value)} /> */}
        <div className="container-fluid px-lg-5 pt body">
          <div className="row justify-content-center">
            {loading && <div>Loading....</div>}
            {!loading &&
              anim &&
              anim.map((anim, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 d-flex">
                  <div className="card w-100">
                    <div className="main">
                      <div className="photos">
                        <img src={anim.image_url} alt="" />
                      </div>
                    </div>
                    <div className="description">
                      <h1>{anim.title}</h1>
                      <h2 className="pt-1 pb-4">Episode : {anim.episodes}</h2>
                      <p className="read-more">
                        <a href={anim.url} target="_blank" rel="noopener noreferrer">
                          Click Here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wibu;
