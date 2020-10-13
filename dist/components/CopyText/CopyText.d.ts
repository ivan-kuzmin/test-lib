import React from 'react';
export interface CopyText {
    className?: string;
    text: string;
    hideIcon?: boolean;
    messageOnCopy?: string;
    onCopy?: () => void;
}
export declare const CopyText: React.FC<CopyText>;
