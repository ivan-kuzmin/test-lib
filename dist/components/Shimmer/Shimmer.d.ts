import React, { HTMLAttributes } from 'react';
export declare type Shimmer = {
    className?: string;
    dark?: boolean;
} & HTMLAttributes<HTMLDivElement>;
export declare const Shimmer: React.FC<Shimmer>;
