/** Dependencies **/
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

/** Components **/
import { MainLayout } from './MainLayout';

/** Store **/
import store from '@/store/index';

describe('MainLayout', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <MainLayout>MainLayout test</MainLayout>
      </Provider>,
    );

    const title = screen.getByText('MainLayout test');

    expect(title).toBeInTheDocument();
  });
});
