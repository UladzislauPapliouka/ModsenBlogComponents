import React from 'react';

import type IButtonProps from './types';

import styles from './button.module.scss';
const Button = ({
                    children,
                    variant = 'primary',
                    type,
                    ...restProps
                }: IButtonProps) => (
    <button
        type={type}
        className={`${styles.button} ${styles[variant]}`}
        {...restProps}>
        {children}
    </button>
);

export default React.memo(Button);
