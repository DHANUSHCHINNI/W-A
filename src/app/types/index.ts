import { ReactNode } from 'react';

export interface NavbarProps {
    show: boolean;
}

export interface AssetProps {
    width: number;
    height: number;
    style?: React.CSSProperties;
}

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
} 