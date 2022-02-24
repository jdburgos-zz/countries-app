/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
  const customClasses = className || '';
  const classes = `${styles.card} ${customClasses}`.trim();

  return <div className={classes}>{children}</div>;
};
