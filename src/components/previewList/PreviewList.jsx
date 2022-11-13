import React from 'react';

import { PreviewListItem } from './PreviewListItem';

import data from '../../data/data.json';

export const PreviewList = () => {
  return (
    <>
      {data['preview_news'].map((item) => {
        const { id } = item;
        return <PreviewListItem key={id} {...item} />;
      })}
    </>
  );
};
