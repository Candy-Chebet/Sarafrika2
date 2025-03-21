import React from 'react';
import Article from '../../components/article/Article';
import { elimika, bff, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="apps">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">We are diverse <br /> Explore our various programs</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={elimika} text="Elimika deals with all things music and arts education. Get to be under the tutilage of renown names in the industry." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={bff} text="Bound For Fame exposes the artist to experience, then the market through networking and job opportunities." />
        <Article imgUrl={blog03} text="App3" />
        <Article imgUrl={blog04} text="App4" />
        <Article imgUrl={blog05} text="App5" />
      </div>
    </div>
  </div>
);

export default Blog;
