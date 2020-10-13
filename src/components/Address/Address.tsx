import React from 'react';

import { bemCssModules } from '../../utils';
import { useIsMobile } from '../../utils/customHooks';

import style from './Address.scss';

const cn = bemCssModules(style, 'Address');

export interface Address {
  className?: string;
  text: string;
}

export const Address: React.FC<Address> = ({ className, text }) => {
  const [refCallback, isMobile] = useIsMobile(350);
  const short = text.length > 6 ? `${text.slice(0, 3)}...${text.slice(-3)}` : text;

  return (
    <div className={cn(null, [className])} ref={refCallback}>
      {isMobile ? short : text}
    </div>
  );
};
