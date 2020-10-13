import React, { ButtonHTMLAttributes } from 'react';
export declare type Button = {
    secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: React.FC<Button>;
