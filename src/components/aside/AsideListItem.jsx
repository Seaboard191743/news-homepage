import React from 'react';
import { CustomLink } from '../customlink/CustomLink';

export const AsideListItem = ({ id, title, text }) => {
  return (
    <section className='aside-preview'>
      <h3 className='subtitle'>
        <CustomLink to={`/new/${id}`} className='preview-link'>
          {title}
        </CustomLink>
      </h3>
      <div className='text'>{text}</div>
    </section>
  );
};
