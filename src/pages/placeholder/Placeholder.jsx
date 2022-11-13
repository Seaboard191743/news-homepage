import React from 'react';
import { Menu } from '../../components/header/menu/Menu';
import { useBurgerMenu } from '../../hooks/useBurgerMenu';

import { useOutletContext } from 'react-router-dom';

export const Placeholder = () => {
  const { overlayRef, layerRef } = useBurgerMenu();
  const { handleOpen } = useOutletContext();

  return (
    <div className='placeholder'>
      <div className='container-jsx'>
        <div ref={overlayRef} className='overlay'></div>
        <div ref={layerRef} className='burger-menu-layer'>
          <Menu className='vertical-menu' onClick={handleOpen} />
        </div>
      </div>
      <h1 className='placeholder-title'>Page does not exist.</h1>
    </div>
  );
};
