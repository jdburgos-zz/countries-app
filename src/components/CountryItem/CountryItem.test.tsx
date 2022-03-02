/** Dependencies **/
import { render, screen } from '@testing-library/react';

/** Components **/
import { CountryItem } from './CountryItem';

/** Mocks **/
import { mockedCountries } from '@/mocks/countries.mock';

describe('CountryItem', () => {
  it('should render the expected mock data', () => {
    render(<CountryItem country={mockedCountries[0]} />);

    const img = screen.getByAltText('Montenegro');
    const title = screen.getByText('Montenegro');
    const population = screen.getByText('621,718');
    const region = screen.getByText('Europe');
    const capital = screen.getByText('Podgorica');

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(region).toBeInTheDocument();
    expect(capital).toBeInTheDocument();
  });
});
