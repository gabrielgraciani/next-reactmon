import { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';

import { Header } from 'components/Header';
import { HeaderAdmin } from 'components/HeaderAdmin';
import { queryClient } from 'services/queryClient';

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
    <QueryClientProvider client={queryClient}>
      {showDefaultHeader ? <Header /> : <HeaderAdmin />}
      <Component {...pageProps} />
      <GlobalStyles />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
