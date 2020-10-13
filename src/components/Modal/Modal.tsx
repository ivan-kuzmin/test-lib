import React, { HTMLAttributes, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { bemCssModules } from '../../utils';
import CloseIcon from './close.svg';
import style from './Modal.scss';

const cn = bemCssModules(style, 'Modal');

export type Modal = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const Modal: React.FC<Modal> = ({ className, isOpen, onClose, children, ...rest }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e) => {
      if (e.target === ref.current && onClose) onClose();
    };
    if (ref.current) ref.current.addEventListener('click', close);
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    return () => {
      if (ref.current) ref.current.removeEventListener('click', close);
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <div ref={ref} className={cn({ hidden: !isOpen }, [className])} {...rest}>
      <div className={cn('content')}>
        {children}
        <button type="button" className={cn('close')} onClick={onClose}>
          <CloseIcon className={cn('icon')} />
        </button>
      </div>
    </div>,
    document.body
  );
};
