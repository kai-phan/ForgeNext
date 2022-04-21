import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Header from 'src/components/Header';
import Sider, { Data } from 'src/components/Sider';
import Footer from 'src/components/Footer';

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
        <Header />
        <div className="container my-5">
          <Sider data={data} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    data: { access_token },
  } = await axios.get(`${process.env.DOMAIN}/api/auth`);

  const data = [
    {
      urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9hcGFydG1lbnQucnZ0',
      thumbnail: './thumbnail/building_1.png',
    },
    {
      urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9mMjIuaXB0',
      thumbnail: './thumbnail/f22.png',
    },
    {
      urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9UYW5xdWUuaXB0',
      thumbnail: './thumbnail/box.png',
    },
    {
      urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9BcmMtMDctMDEtOTkucnZ0',
      thumbnail: './thumbnail/building_2.png',
    },
    {
      urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9FbGVjdHJpY2FsLnJ2dA',
      thumbnail: './thumbnail/mep.png',
    },
  ];

  return {
    props: {
      access_token,
      data,
    },
  };
};
