import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';

export const LayOut = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const props = { open, handleOpen };

  return (
    <div className='layout-container'>
      <Header {...props} />
      <Outlet context={props} />
    </div>
  );
};
