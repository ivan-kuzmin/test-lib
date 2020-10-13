import React, { HTMLAttributes } from 'react';
export declare type Loader = {
    className?: string;
    color?: string;
    size?: number;
} & HTMLAttributes<HTMLDivElement>;
export declare const Loader: React.FC<Loader>;
