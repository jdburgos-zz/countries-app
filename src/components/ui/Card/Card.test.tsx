/** Dependencies **/
import { render, screen } from '@testing-library/react';

/** Components **/
import { Card } from './Card';

describe('Card', () => {
  it('should render the component', () => {
    render(
      <Card>
        <div>Card test</div>
      </Card>,
    );

    const text = screen.getByText('Card test');

    expect(text).toBeInTheDocument();
  });
});
