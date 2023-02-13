import Head from 'next/head';
import brand from '@westpac/wbc';
import { GEL, Header } from '@westpac/global-components';
import { Button } from '@westpac/button';

export default function Store() {
  return (
    <div className="container">
      <GEL brand={brand}>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <Header>
          <h3>Elit Odit sit alias autem officia</h3>
        </Header>
        <Button>LLOOLL</Button>
      </GEL>
      <Head>
        <title>Store | Kitchen Sink</title>
      </Head>
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <p className="description">Built With Turborepo + Next.js</p>
    </div>
  );
}
