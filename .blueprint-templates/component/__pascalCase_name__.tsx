import React from 'react';

import { bemCssModules } from '../../utils';

import style from './{{pascalCase name}}.scss';

const cn = bemCssModules(style, '{{pascalCase name}}');

export interface {{pascalCase name}} {
  className?: string;
}

export const {{pascalCase name}}: React.FC<{{pascalCase name}}> = ({ className }) => {
  return (
    <div className={cn(null, [className])}>
    </div>
  );
};
