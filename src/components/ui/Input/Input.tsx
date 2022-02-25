/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  className?: string;
  input: {
    ref: React.RefObject<HTMLInputElement>;
    placeholder: string;
    type: string;
  };
  state: string;
  onChange: () => void;
};

export const Input: React.FC<InputProps> = ({ className, state, onChange, input }) => {
  const customClasses = className || '';
  const stateClass = state ? styles[`input--${state}`] : '';
  const classes = `${styles.input} ${customClasses} ${stateClass}`.trim();

  return <input onChange={onChange} className={classes} {...input} />;
};
