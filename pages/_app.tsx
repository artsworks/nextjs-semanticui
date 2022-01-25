import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import DataProvider from '../providers/dataProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
       <Layout>
         <Component {...pageProps} />
       </Layout>
    </DataProvider>
  );
}

export default MyApp;
