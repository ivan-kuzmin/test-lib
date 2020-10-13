import React, { HTMLAttributes } from 'react';
import shortid from 'shortid';

import { bemCssModules } from '../../utils';
import style from './Notification.scss';

const cn = bemCssModules(style, 'Notification');

type Button = {
  label: string;
  onClick?: () => void;
};

export type Notification = {
  type?: 'notification' | 'error';
  title?: string;
  buttons?: [Button, Button?];
} & HTMLAttributes<HTMLDivElement>;

export const Notification: React.FC<Notification> = ({
  className,
  children,
  type = 'notification',
  title,
  buttons,
  ...rest
}) => {
  return (
    <div className={cn({ type }, [className])} {...rest}>
      <span className={cn('title')}>{title}</span>
      <span className={cn('description')}>{children}</span>
      <div className={cn('buttons')}>
        {!!buttons &&
          buttons.map(
            (item) =>
              item && (
                <button
                  className={cn('button')}
                  key={shortid.generate()}
                  type="button"
                  onClick={item.onClick}
                >
                  {item.label || (type === 'error' ? 'Close' : 'Continue')}
                </button>
              )
          )}
      </div>
    </div>
  );
};
