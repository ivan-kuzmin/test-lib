import React, { HTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';

import style from './Loader.scss';

const cn = bemCssModules(style, 'Loader');

export type Loader = {
  className?: string;
  color?: string;
  size?: number;
} & HTMLAttributes<HTMLDivElement>;

export const Loader: React.FC<Loader> = ({
  className,
  color = 'var(--color-orange-primary)',
  size = 48,
}) => {
  return (
    <div className={cn(null, [className])} style={{ '--size': `${size}px` } as React.CSSProperties}>
      <svg className={cn('circular')} viewBox="25 25 50 50">
        <circle
          className={cn('path')}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          style={{ stroke: color }}
        />
      </svg>
    </div>
  );
};
