import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Header from 'src/components/Header';
import Sider, { Data } from 'src/components/Sider';

type Props = {
  data: Data[];
};

export default function Home({ data }: Props) {
  return (
    <div>
      <Head>
        <title>Forge Next</title>
        <meta name="description" content="Forge App with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <Header />
          <Sider data={data} />
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: { access_token },
  } = await axios.get(`${process.env.VERCEL_URL}/api/auth`);

  const { data } = await axios.get(
    `${process.env.VERCEL_URL}/api/modelderivative`,
  );

  return {
    props: {
      access_token,
      data,
    },
  };
};
