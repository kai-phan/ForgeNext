import React from 'react';
import ViewerV2 from 'src/components/ViewerV2';
import { GetStaticPaths, GetStaticProps } from 'next';
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
        <div className="container">
          <Header />
          <ViewerV2 token={access_token} urn={urn} />
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const {
  //   data: { access_token },
  // } = await axios.get(`${process.env.DOMAIN}/api/auth`);

  const { data } = await axios.get(`${process.env.DOMAIN}/api/modelderivative`);

  return {
    paths: data.map((d: any) => ({ params: { urn: d.urn } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {
    data: { access_token },
  } = await axios.get(`${process.env.VERCEL_URL}/api/auth`);

  return {
    props: {
      urn: ctx.params?.urn,
      access_token,
    },
  };
};

export default Detail;
