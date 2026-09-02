import type {ButtonHTMLAttributes, PropsWithChildren} from 'react';

type ButtonControlProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
    position?: 'left' | 'right';
}>;

export const ButtonControl =({children, position: _position, style, ...buttonProps}: ButtonControlProps)=> {
return(
        <button {...buttonProps} style={{
            zIndex: 10,
            background: 'none',
            borderStyle: 'none',
            fontSize: '50px',
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            transition: 'color 0.2s linear',
            ...style,
        }}>
            {children}
        </button>
    )
}
