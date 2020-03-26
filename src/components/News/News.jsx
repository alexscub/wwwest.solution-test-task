import React, { useState, useEffect } from 'react';
import getNews from '../../services/api';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then(data => setNews([...data]));
  }, []);
  return (
    <div className="container">
      <h2 className="title is-2 has-text-centered">Breaking News!</h2>
      <div className="columns is-multiline">
        {news.map(item => (
          <NewsCard key={item.publishedAt} {...item} />
        ))}
      </div>
    </div>
  );
};

export default News;
