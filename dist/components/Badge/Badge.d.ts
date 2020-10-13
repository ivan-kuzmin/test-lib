import React, { ButtonHTMLAttributes } from 'react';
export declare type Badge = {
    className?: string;
    label?: React.ReactNode;
    active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Badge: React.FC<Badge>;
