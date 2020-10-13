import React, { HTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';

import style from './Banner.scss';

const cn = bemCssModules(style, 'Banner');

export type Banner = {
  className?: string;
  icon: React.FC<{ className?: string }>;
  image: React.FC<{ className?: string }>;
} & HTMLAttributes<HTMLButtonElement>;

export const Banner: React.FC<Banner> = ({
  className,
  icon: Icon,
  image: Image,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn({ disabled: !rest.onClick }, [className])}
      type="button"
      disabled={!rest.onClick}
      {...rest}
    >
      <div className={cn('wrapper')}>
        <div className={cn('content')}>
          <Icon className={cn('icon')} />
          {children}
        </div>
        <Image className={cn('image')} />
      </div>
    </button>
  );
};
