import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { HeadNewsPreview } from '../../components/headNewsPreview/HeadNewsPreview';
import { AsideList } from '../../components/aside/AsideList';
import { PreviewList } from '../../components/previewList/PreviewList';
import { Menu } from '../../components/header/menu/Menu';

import { useBurgerMenu } from '../../hooks/useBurgerMenu';

import './homepage.css';

export const HomePage = () => {
  const { handleOpen } = useOutletContext();

  const { overlayRef, layerRef } = useBurgerMenu();
  return (
    <main className='home-page'>
      <div className='container-jsx'>
        <div ref={overlayRef} className='overlay'></div>
        <div ref={layerRef} className='burger-menu-layer'>
          <Menu className='vertical-menu' onClick={handleOpen} />
        </div>
        <HeadNewsPreview />
        <AsideList />
      </div>
      <div className='container-jsx news-preview-container'>
        <PreviewList />
      </div>
    </main>
  );
};
