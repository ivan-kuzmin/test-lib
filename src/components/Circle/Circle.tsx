import React from 'react';

import { bemCssModules } from '../../utils';
import style from './Circle.scss';

const cn = bemCssModules(style, 'Circle');

export interface Circle {
  className?: string;
  size?: number;
  background?: string;
}

export const Circle: React.FC<Circle> = ({
  className,
  children,
  size = 40,
  background = 'var(--color-black)',
}) => {
  return (
    <div
      className={cn(null, [className])}
      style={{ '--size': `${size}px`, '--background': background } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
