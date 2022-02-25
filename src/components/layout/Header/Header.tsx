/** React core **/
import { useState } from 'react';

/** Next core **/
import Link from 'next/link';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => {
  const [theme, setTheme] = useState('dark');

  const handleThemeSwitch = () => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
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
