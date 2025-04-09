import React from 'react';
import Article from '../../components/article/Article';
import { elimika, bff } from './imports';
import './products.css';
// , Products03, Products04, Products05 - add them to the elimika and bff list once apps are updated
const Products = () => (
  <div className="products section__padding" id="apps">
    <div className="products__overlay" />
    <div className="products__content">
      <div className="products__heading">
        <h1 className="products__title">We are <span className="products__title-accent">diverse</span> <br /> Explore our various programs</h1>
      </div>
      <div className="products__container">
        <div className="products__container_group">
          <Article
            imgUrl={bff}
            text="Schools bands competition reality TV show - launching young talent into the market."
            url="/bff"
            btnText="Explore BFF"
          />
          <Article
            imgUrl={elimika}
            text="Connect. Learn. Succeed - Achieve your academic goals with personalized, one-on-one, team and group tutoring from top experts in the field."
            url="/elimika"
            btnText="Discover Elimika"
          />
          <Article
            imgUrl={bff}
            text="Schools bands competition reality TV show - launching young talent into the market."
            url="/bff"
            btnText="Explore BFF"
          />
          <Article
            imgUrl={elimika}
            text="Connect. Learn. Succeed - Achieve your academic goals with personalized, one-on-one, team and group tutoring from top experts in the field."
            url="/elimika"
            btnText="Discover Elimika"
          />
          <Article
            imgUrl={bff}
            text="Schools bands competition reality TV show - launching young talent into the market."
            url="/bff"
            btnText="Explore BFF"
          />
          <Article
            imgUrl={elimika}
            text="Connect. Learn. Succeed - Achieve your academic goals with personalized, one-on-one, team and group tutoring from top experts in the field."
            url="/elimika"
            btnText="Discover Elimika"
          />
          {/* <Article imgUrl={Products03} text="App3" btnText="Learn More" />
          <Article imgUrl={Products04} text="App4" btnText="Learn More" />
          <Article imgUrl={Products05} text="App5" btnText="Learn More" /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Products;
