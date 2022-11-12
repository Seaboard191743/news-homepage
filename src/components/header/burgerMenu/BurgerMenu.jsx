import React from 'react';

export const BurgerMenu = ({ open, handleOpen }) => {
  return (
    <div className='burger-menu' onClick={handleOpen}>
      <div
        className={
          open ? 'burger-item burger-item-first-active' : 'burger-item'
        }
      ></div>
      <div
        className={open ? 'burger-item burger-item-hidden' : 'burger-item'}
      ></div>
      <div
        className={open ? 'burger-item burger-item-last-active' : 'burger-item'}
      ></div>
    </div>
  );
};
