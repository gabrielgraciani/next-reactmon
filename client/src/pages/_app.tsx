import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

import { Header } from 'components/Header';

NProgress.configure({
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
