import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
