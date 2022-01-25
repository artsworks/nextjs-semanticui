import { PropsWithChildren } from 'react';
import Head from 'next/head';
import MenuTop from '../menu';

import styles from '../../styles/Layout.module.css';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>AK Labs | Next.js</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MenuTop></MenuTop>
      <main className={styles.main}>{children}</main>
    </>
  );
}
