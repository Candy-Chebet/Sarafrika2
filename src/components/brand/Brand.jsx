import React from 'react';
import { facebook, tiktok, instagram, twitter, youtube } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img
        src={facebook}
        style={{ width: '30px' }}
      />
    </div>
    <div>
      <img
        src={tiktok}
        style={{ width: '30px' }}
      />
    </div>
    <div>
      <img
        src={instagram}
        style={{ width: '30px' }}
      />
    </div>
    <div>
      <img
        src={twitter}
        style={{ width: '30px' }}
      />
    </div>
    <div>
      <img
        src={youtube}
        style={{ width: '30px' }}
      />
    </div>
  </div>
);

export default Brand;
