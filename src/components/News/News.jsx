import React, { Component } from 'react';
import getNews from '../../services/api';
import NewsCard from './NewsCard/NewsCard';

export default class News extends Component {
  state = { news: [] };

  componentDidMount() {
    getNews().then(data => this.setState({ news: data }));
  }

  render() {
    const { news } = this.state;
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
  }
}
