/** Dependencies **/
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

/** Components **/
import { Header } from './Header';

/** Store **/
import store from '@/store/index';

describe('Header', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const title = screen.getByText('Where in the world?');
    const themeText = screen.getByText('dark Mode');

    expect(title).toBeInTheDocument();
    expect(themeText).toBeInTheDocument();
  });

  it('should change the theme', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    userEvent.click(screen.getByText('dark Mode'));
    const lightThemeText = screen.getByText('light Mode');
    expect(lightThemeText).toBeInTheDocument();

    userEvent.click(screen.getByText('light Mode'));
    const darkThemeText = screen.getByText('dark Mode');
    expect(darkThemeText).toBeInTheDocument();
  });
});
