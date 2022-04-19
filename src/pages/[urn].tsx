import React from 'react';
import ViewerV2 from 'src/components/ViewerV2';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Header from 'src/components/Header';

type Props = {
  urn: string;
  access_token: string;
};

const Detail = ({ urn, access_token }: Props) => {
  return (
    <div>
      <Head>
        <title>Forge Next</title>
        <meta name="description" content="Forge App with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ViewerV2 token={access_token} urn={urn} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    data: { access_token },
  } = await axios.get(`${process.env.DOMAIN}/api/auth`);

  return {
    props: {
      urn: ctx.params?.urn,
      access_token,
    },
  };
};

export default Detail;
