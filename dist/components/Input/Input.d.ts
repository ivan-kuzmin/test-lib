import React, { InputHTMLAttributes } from 'react';
export declare type Input = {
    className?: string;
    disabled?: boolean;
    label?: string;
    active?: boolean;
    error?: string | boolean;
    hideVisibilityIcon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
export declare const Input: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    active?: boolean | undefined;
    error?: string | boolean | undefined;
    hideVisibilityIcon?: boolean | undefined;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
