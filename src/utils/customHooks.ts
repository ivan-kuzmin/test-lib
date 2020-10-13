import { useState, useEffect } from 'react';

import breakpoints from '../styles/public/_const.scss';

export const useIsMobile: (
  breakpoint?: number
) => [(element: HTMLDivElement | null) => void, boolean] = (
  breakpoint = +breakpoints.tablet.replace('px', '')
) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (ref) {
        const width = ref.clientWidth;
        setIsMobile(width <= breakpoint);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  const refCallback = (element: HTMLDivElement | null) => {
    if (element) {
      const width = element.clientWidth;
      setRef(element);
      setIsMobile(width <= breakpoint);
    }
  };

  return [refCallback, isMobile];
};
