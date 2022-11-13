import React from 'react';
import { CustomLink } from '../customlink/CustomLink';

export const PreviewListItem = ({ src, alt, count, title, text }) => {
  return (
    <section className='news-preview-item'>
      <div className='news-preview-banner'>
        <img src={src} alt={alt} />
      </div>
      <div className='news-preview-description'>
        <p className='news-preview-count'>{count}</p>
        <h3 className='news-preview-title'>
          <CustomLink to='/' className='news-preview-link'>
            {title}
          </CustomLink>
        </h3>
        <p className='news-preview-text'>{text}</p>
      </div>
    </section>
  );
};
