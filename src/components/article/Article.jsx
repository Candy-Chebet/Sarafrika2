import React from 'react';
import './article.css';

const Article = ({ imgUrl, text, url }) => (
  <div className="article-item">
    <div className="article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="article-content">
      <div className="article-info">
        <h4 className="article-title">{text}</h4>
      </div>
      <a href={url} className="article-explore">Explore</a>
    </div>
  </div>
);

export default Article;
