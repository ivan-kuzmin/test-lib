import React, { HTMLAttributes } from 'react';
export declare type ProgressBar = {
    className?: string;
    value: number;
} & HTMLAttributes<HTMLDivElement>;
export declare const ProgressBar: React.FC<ProgressBar>;
