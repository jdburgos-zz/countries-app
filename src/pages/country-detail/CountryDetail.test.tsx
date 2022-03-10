/** Dependencies **/
import { RouterContext } from 'next/dist/shared/lib/router-context';

/** Pages **/
import CountryDetail from '@/pages/country-detail/[name].page';

/** Utils **/
import { screen } from '@/utils/test-utils';
import { render } from '@/utils/test-utils/customRender';
import { createMockRouter } from '@/utils/test-utils/createMockRouter';

describe('Country detail', () => {
  it('should render loading... text', () => {
    const router = createMockRouter({ isFallback: true, pathname: '/country-detail/Montenegro' });

    render(
      <RouterContext.Provider value={router}>
        <CountryDetail />
      </RouterContext.Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
