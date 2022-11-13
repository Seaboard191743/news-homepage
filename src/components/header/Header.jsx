import React from 'react';

import { Menu } from './menu/Menu';
import { NavBrand } from './navBrand/NavBrand';
import { BurgerMenu } from './burgerMenu/BurgerMenu';

import './header.css';

export const Header = (props) => {
  return (
    <header className='header'>
      <nav className='navigation'>
        <NavBrand />
        <Menu />
        <BurgerMenu {...props} />
      </nav>
    </header>
  );
};
