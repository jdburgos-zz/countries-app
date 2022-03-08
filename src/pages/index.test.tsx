/** Dependencies **/
import { rest } from 'msw';
import user from '@testing-library/user-event';

/** Pages **/
import Home from '@/pages/index.page';

/** Mocks **/
import { server } from '@/mocks/server.mock';

/** Utils **/
import { render, screen, waitForElementToBeRemoved } from '@/utils//test-utils';

/** Api **/
import { API } from '@/api/endpoints';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home', () => {
  it('should render an error message when there is no data', async () => {
    server.use(
      rest.get(API, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(<Home />);

    // eslint-disable-next-line testing-library/prefer-query-by-disappearance
    await waitForElementToBeRemoved(() => screen.getByText('loading...'));

    expect(screen.getByText('failed to load')).toBeInTheDocument();
  });

  describe('should retrieve data', () => {
    beforeEach(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<Home />);

      // eslint-disable-next-line testing-library/prefer-query-by-disappearance
      await waitForElementToBeRemoved(() => screen.getByText('loading...'));
    });

    it('and render the expected mocked data', async () => {
      expect(screen.getByText('Montenegro')).toBeInTheDocument();
    });

    describe('should search', () => {
      it("when user types a country that doesn't exist", () => {
        user.type(screen.getByTestId('input-search'), 'unknown{enter}');

        expect(screen.queryByTestId('country-item')).not.toBeInTheDocument();
      });

      it('when user types a country that exists', () => {
        const searchText = 'Montenegro{enter}';

        user.type(screen.getByTestId('input-search'), searchText);

        expect(screen.getByText('Montenegro')).toBeInTheDocument();
      });
    });
  });
});
