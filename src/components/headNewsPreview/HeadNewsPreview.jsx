import React from 'react';

import data from '../../data/data.json';
import articleBanner from '../../assets/head_news_banner_lg.png';

export const HeadNewsPreview = () => {
  return (
    <div className='article-preview'>
      <div className='article-banner'>
        <img src={articleBanner} alt='head-news-banner' />
      </div>
      <div className='article-description'>
        <h1 className='article-description-title'>{data['head_news'].title}</h1>
        <div className='article-description-preview'>
          <p className='article-description-text'>{data['head_news'].text}</p>
          <button className='btn read-more'>Read more</button>
        </div>
      </div>
    </div>
  );
};
