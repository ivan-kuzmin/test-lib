import React, { HTMLAttributes } from 'react';
declare type Button = {
    label: string;
    onClick?: () => void;
};
export declare type Notification = {
    type?: 'notification' | 'error';
    title?: string;
    buttons?: [Button, Button?];
} & HTMLAttributes<HTMLDivElement>;
export declare const Notification: React.FC<Notification>;
export {};
