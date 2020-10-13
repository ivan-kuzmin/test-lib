import React, { ButtonHTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';

import style from './Badge.scss';

const cn = bemCssModules(style, 'Badge');

export type Badge = {
  className?: string;
  label?: React.ReactNode;
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Badge: React.FC<Badge> = ({
  className,
  children,
  label,
  active,
  type = 'button',
  ...rest
}) => {
  return (
    <button type={type} className={cn({ active }, [className])} {...rest}>
      {label || children}
    </button>
  );
};
