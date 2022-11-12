import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/Header';

export const LayOut = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!open) {
      navigate('/');
    }
  }, [open]);

  const props = { open, handleOpen };

  return (
    <div className='layout-container'>
      <Header {...props} />
      <Outlet context={props} />
    </div>
  );
};
