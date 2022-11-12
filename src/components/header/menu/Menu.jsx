import React from 'react';

import { CustomLink } from '../../customlink/CustomLink';

export const Menu = (props) => {
  return (
    <div className={`menu ${props?.className}`}>
      <CustomLink className='nav-link' to='/'>
        Home
      </CustomLink>
      <CustomLink className='nav-link' to='/new'>
        New
      </CustomLink>
      <CustomLink className='nav-link' to='/popular'>
        Popular
      </CustomLink>
      <CustomLink className='nav-link' to='/trending'>
        Trending
      </CustomLink>
      <CustomLink className='nav-link' to='/categories'>
        Categories
      </CustomLink>
    </div>
  );
};
