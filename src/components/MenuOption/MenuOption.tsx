import React, { useMemo, ButtonHTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';
import { Circle } from '../..';
import style from './MenuOption.scss';

const cn = bemCssModules(style, 'MenuOption');

export type MenuOption = {
  className?: string;
  icon?: string | React.ReactNode;
  title?: string;
  subtitle?: string;
  inline?: boolean;
  hovered?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  secondaryIcon?: React.ReactNode;
  rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuOption: React.FC<MenuOption> = ({
  className,
  icon: Icon,
  title,
  subtitle,
  inline,
  hovered = true,
  isFocused,
  isSelected,
  secondaryIcon,
  rounded = true,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cn({ rounded, hovered, isFocused, isSelected }, [className])}
      {...rest}
    >
      {useMemo(
        () =>
          typeof Icon === 'function' ? (
            <div className={cn('icon')}>
              <Icon />
            </div>
          ) : typeof Icon === 'string' ? (
            <Circle className={cn('circle')}>
              <img className={cn('icon')} src={Icon} alt="" />
            </Circle>
          ) : (
            Icon
          ),
        [Icon]
      )}
      <div className={cn('content', { inline })}>
        <div>{title}</div>
        <div className={cn('subtitle', { isSelected })}>
          {inline && <>&nbsp;</>}
          {subtitle}
        </div>
      </div>
      {secondaryIcon}
    </button>
  );
};
