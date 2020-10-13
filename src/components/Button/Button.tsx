import React, { ButtonHTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';
import style from './Button.scss';

const cn = bemCssModules(style, 'Button');

export type Button = {
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Button> = ({
  children,
  className,
  secondary,
  type = 'button',
  ...rest
}) => {
  return (
    <button type={type} className={cn({ secondary }, [className, 'base-box'])} {...rest}>
      {children}
    </button>
  );
};
