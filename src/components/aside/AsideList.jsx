import React from 'react';
import { AsideListItem } from './AsideListItem';
import data from '../../data/data.json';

export const AsideList = () => {
  return (
    <aside className='aside'>
      <h2 className='aside-title'>New</h2>
      {data['new_news'].map((item) => {
        const { id } = item;
        return <AsideListItem key={id} {...item} />;
      })}
    </aside>
  );
};
