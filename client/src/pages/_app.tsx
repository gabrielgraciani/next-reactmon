import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';

import { Header } from 'components/Header';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
