import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

import { HeadNewsPreview } from '../../components/headNewsPreview/HeadNewsPreview';
import { AsideList } from '../../components/aside/AsideList';
import { PreviewList } from '../../components/previewList/PreviewList';
import { Menu } from '../../components/header/menu/Menu';

import './homepage.css';

export const HomePage = () => {
  const { open } = useOutletContext();

  const overlayRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const layer = layerRef.current;
    if (open) {
      overlay.style.display = 'block';
      layer.style.display = 'block';
    }
    return () => {
      overlay.style.display = 'none';
      layer.style.display = 'none';
    };
  }, [open]);

  return (
    <main className='home-page'>
      <div className='container-jsx'>
        <div ref={overlayRef} className='overlay'></div>
        <div ref={layerRef} className='burger-menu-layer'>
          <Menu className='vertical-menu' />
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
