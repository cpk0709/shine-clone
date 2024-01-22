import '@/styles/globals.css';

import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Head from '@/components/common/Head';
import { persistor, wrapper } from '@/stores';
import { globalStyles } from '@/styles/reset';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Global styles={globalStyles} />
            <Head />
            <Component {...props.pageProps} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
