import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import 'nprogress/nprogress.css';

import { Header } from 'components/Header';
import { HeaderAdmin } from 'components/HeaderAdmin';

NProgress.configure({
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { asPath } = useRouter();

  const showDefaultHeader = !asPath.startsWith('/admin');
  return (
    <>
      {showDefaultHeader ? <Header /> : <HeaderAdmin />}
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
