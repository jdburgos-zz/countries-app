/** React core **/
import React from 'react';

/** Components **/
import { MainContainer } from '@components/layout/MainContainer';

/** Hooks **/
import { useAppSelector } from '@hooks/react-redux';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useAppSelector(state => state.ui.theme);
  const defaultClass = 'main-wrapper';
  const themeClass = `${theme}-theme`;
  const classes = `${defaultClass} ${themeClass}`;

  return (
    <div className={classes}>
      <MainContainer>{children}</MainContainer>
    </div>
  );
};
