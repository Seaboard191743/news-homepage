import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  const actualClassName = match ? `${props.className} active` : props.className;

  return (
    <Link to={to} className={actualClassName}>
      {children}
    </Link>
  );
};
