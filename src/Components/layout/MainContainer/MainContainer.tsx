/** React core **/
import React from 'react';

/** Components **/
import { Header } from '../Header';

/** Styles **/
import styles from './MainContainer.module.scss';

type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <>
    <Header />
    <main className={styles['main-container']}>{children}</main>
  </>
);
