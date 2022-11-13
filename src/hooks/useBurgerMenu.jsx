import { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

export const useBurgerMenu = () => {
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
  return {
    overlayRef,
    layerRef,
    open,
  };
};
