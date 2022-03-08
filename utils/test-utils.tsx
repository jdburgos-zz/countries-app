/** React core **/
import { FC, ReactElement } from 'react';

/** Dependencies **/
import { render, RenderOptions } from '@testing-library/react';
import { SWRConfig } from 'swr';

async function customFetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    const json = (await res.json()) as { message: string };
    throw new Error(json.message);
  }

  return res.json();
}

const AllTheProviders: FC = ({ children }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map(), fetcher: customFetcher }}>
      {children}
    </SWRConfig>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
