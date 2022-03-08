/** Dependencies **/
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';

/** Mocks **/
import { mockedCountries } from '@/mocks/countries.mock';

/** Api **/
import { API } from '@/api/endpoints';

export const server = setupServer(
  rest.get<DefaultRequestBody>(API, (req, res, ctx) => {
    return res(ctx.delay(100), ctx.json(mockedCountries));
  }),
);
