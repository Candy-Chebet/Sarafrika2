import React from 'react';
import './shop.css';

const Shop = () => (
  <div className="shop-container">
    <div className="shop-h">
      <header className="shop-header">
        <h1>Sell. Buy. Grow</h1>
        <p>
          Sarafrika Shop brings you the latest trends, high-quality products, and unbeatable deals all in one place.
          Whether you&apos;re looking for fashion, instruments, food, equipment, electronics, home essentials, or beauty
          products, we&apos;ve got you covered!
        </p>
      </header>

      <section className="why-shop">
        <h2>Why Shop With Us?</h2>
        <ul>
          <li><strong>Wide Selection:</strong> Explore a vast range of products carefully curated to meet your needs.</li>
          <li><strong>Exclusive Deals:</strong> Enjoy amazing discounts and limited-time offers on top brands.</li>
          <li><strong>Fast & Secure Checkout:</strong> Shop with confidence using our seamless and secure payment options.</li>
          <li><strong>Lightning-Fast Delivery:</strong> Get your orders delivered right to your doorstep in no time.</li>
          <li><strong>Customer Satisfaction Guaranteed:</strong> Our dedicated support team is always here to help you.</li>
        </ul>
      </section>
    </div>

    <section className="shop-categories">
      <h2>Shop By Category</h2>
      <div className="categories">
        <div className="category">Fashion & Apparel</div>
        <div className="category">Electronics & Gadgets</div>
        <div className="category">Home & Living</div>
        <div className="category">Health & Beauty</div>
      </div>
    </section>

    <section className="community">
      <h2>Join Our Community</h2>
      <p>
        Sign up for our newsletter and be the first to know about exclusive deals, new arrivals, and exciting offers.
        Follow us on social media for daily inspiration and special promotions!
      </p>
    </section>

    <footer className="shop-footer">
      <h2>Start Shopping Now!</h2>
      <p>Browse our collections, add your favorites to the cart, and enjoy a hassle-free shopping experience.</p>
      <button type="button" className="shop-button">Shop Now</button>
    </footer>
  </div>
);

export default Shop;
