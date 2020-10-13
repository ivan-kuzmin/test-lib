import React, { HTMLAttributes } from 'react';
export declare type Modal = {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;
export declare const Modal: React.FC<Modal>;
