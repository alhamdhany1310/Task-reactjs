import axios from 'axios';
import React from 'react';
import '../css/Style.css';
class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      q: '',
    };
  }
  componentDidMount() {
    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {
        q: `jokowi`,
        lang: 'id',
        sort_by: 'relevancy',
        page: '1',
      },
      headers: {
        'x-api-key': 'GsSSbGr0RBCbpCpZyTfiGxlD7KWhrI9YWUwKmR4ZA5w',
      },
    };

    axios.request(options).then((newsData) => {
      // console.log(newsData.data.articles);
      this.setState({
        news: newsData.data.articles,
      });
    });
  }
  handleInputChange = (e) => {
    e.preventDefault();
    const search = e.target.value;
    // console.log(search);
    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {
        q: `${search}`,
        lang: 'id',
        sort_by: 'relevancy',
        page: '1',
      },
      headers: {
        'x-api-key': 'GsSSbGr0RBCbpCpZyTfiGxlD7KWhrI9YWUwKmR4ZA5w',
      },
    };
    axios.request(options).then((newsData) => {
      // console.log(newsData.data.articles);
      this.setState({
        news: newsData.data.articles,
      });
    });
  };
  render() {
    const { search } = this.state.news;
    return (
      <div>
        <nav className="navbar bg-light pixed-top">
          <div className="container">
            <a href="https://" className="navbar-brand">
              Al News
            </a>
            <form className="d-flex" role="search">
              <input name="search" value={search} onChange={this.handleInputChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="container-fluid px-lg-5">
          <div className="row justify-content-center">
            {this.state.news.map((news, index) => {
              return (
                // <div>
                //   <p key={index}>{news.title}</p>
                // </div>
                <div key={index} className="col-lg-4 col-md-6 d-flex">
                  <div className="blog-card">
                    <div className="meta">
                      <div className="photo">
                        <h3 className="text-center">{news.clean_url}</h3>
                        <img src={news.media} alt="" />
                      </div>
                    </div>
                    <div className="description">
                      <h1>{news.title}</h1>
                      <h2 className="text-primary fw-bold">{news.published_date}</h2>
                      <h2 className="pt-1 pb-4">{news.excerpt}</h2>
                      <p className="read-more">
                        <a href={news.link} rel="noopener noreferrer">
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default News;
