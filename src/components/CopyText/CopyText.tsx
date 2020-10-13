import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { bemCssModules } from '@src/utils';

import { CopyIcon, CopiedIcon } from './icons';

import style from './CopyText.scss';

const cn = bemCssModules(style, 'CopyText');
let timeout;

export interface CopyText {
  className?: string;
  text: string;
  hideIcon?: boolean;
  messageOnCopy?: string;
  onCopy?: () => void;
}

export const CopyText: React.FC<CopyText> = ({
  className,
  hideIcon,
  text,
  children,
  messageOnCopy,
  onCopy,
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    if (onCopy) onCopy();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={cn(null, [className])}>
      {copied ? (
        <>
          <CopiedIcon className={cn('icon')} />
          {messageOnCopy || 'Copied'}
        </>
      ) : (
        <CopyToClipboard text={text} onCopy={handleClick}>
          <div className={cn('link', ['link'])}>
            {!hideIcon && <CopyIcon className={cn('icon')} />}
            {children}
          </div>
        </CopyToClipboard>
      )}
    </div>
  );
};
