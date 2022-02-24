/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

type ButtonProps = {
  className?: string;
  variant?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  onClick,
  disabled,
  children,
}) => {
  const defaultClass = 'btn';
  const customClasses = className || '';
  const variantClass = variant ? `${styles[variant]}` : '';
  const classes = `${defaultClass} ${variantClass} ${customClasses}`.trim();

  return (
    <button className={classes} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
