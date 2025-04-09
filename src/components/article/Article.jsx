import React from 'react';
import './article.css';

const Article = ({ imgUrl, text, url, btnText }) => (
  <div className="article">
    <div className="article__image-container">
      <img className="article__image" src={imgUrl} alt="Article" />
    </div>
    <div className="article__content">
      <p className="article__text">{text}</p>
      <a href={url} className="article__button">
        {btnText || 'Learn More'}
      </a>
    </div>
  </div>
);

export default Article;
