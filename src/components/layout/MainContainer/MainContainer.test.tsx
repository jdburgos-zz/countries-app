/** Dependencies **/
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

/** Components **/
import { MainContainer } from './MainContainer';

/** Store **/
import store from '@/store/index';

describe('MainContainer', () => {
  it('should render the component', () => {
    render(
      <Provider store={store}>
        <MainContainer>MainContainer test</MainContainer>
      </Provider>,
    );

    const title = screen.getByText('MainContainer test');

    expect(title).toBeInTheDocument();
  });
});
