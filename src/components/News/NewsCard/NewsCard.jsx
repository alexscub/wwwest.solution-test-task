import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ author, title, description, url, urlToImage, source }) => {
  return (
    <div className="column is-6 is-4-desktop">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{title}</p>
        </div>
        <div className="card-image">
          <figure className="image">
            <img
              src={urlToImage}
              alt={title}
              className="has-ratio"
              width="640"
              height="360"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">{description}</div>
          <p className="content">Source: {source.name}</p>
          <p className="content">Autor: {author}</p>
        </div>
        <div className="card-footer">
          <a href={url} target="blank" className="card-footer-item">
            Read original
          </a>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  source: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
