/** Dependencies **/
import { render, screen } from '@testing-library/react';

/** Pages **/
import Home from '@/pages/index.page';

describe('Home', () => {
  it('should render a error message when there is no data', () => {
    render(<Home />);

    const errorMessage = screen.getByText('failed to load');

    expect(errorMessage).toBeInTheDocument();
  });
});
