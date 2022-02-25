/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from 'next/link';

/** Hooks **/
import { useAppDispatch } from '@hooks/react-redux';

/** Reducers **/
import { setTheme } from '@store/ui/ui.reducer';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => {
  const [theme, switchTheme] = useState('dark');
  const dispatch = useAppDispatch();

  const handleThemeSwitch = () => {
    switchTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
    dispatch(setTheme(theme));
  };

  const icon = theme === 'dark' ? 'cp-moon-o' : 'cp-sun';

  return (
    <header className={styles.header}>
      <span>
        <Link href="/">
          <a className={styles.header__title}>Where in the world?</a>
        </Link>
      </span>
      <div className={styles['header__theme-switch']} onClick={handleThemeSwitch}>
        <i className={icon}></i>
        <span className={styles['header__theme-switch-text']}>{theme} Mode</span>
      </div>
    </header>
  );
};
