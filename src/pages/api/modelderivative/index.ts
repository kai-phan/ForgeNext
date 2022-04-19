import { NextApiHandler } from 'next';
import { ModelDerivativeClient } from 'forge-server-utils';

const data = [
  {
    urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0',
  },
  {
    urn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9ib3guaXB0',
  },
];

const handler: NextApiHandler = async (req, res) => {
  try {
    const client = new ModelDerivativeClient({
      client_id: process.env.FORGE_CLIENT_ID!,
      client_secret: process.env.FORGE_CLIENT_SECRET!,
      token: req.body.token,
    });

    const model_res = await Promise.all(
      data.map((d) => client.getThumbnail(d.urn)),
    );

    const format = model_res.map((src, index) => ({
      thumbnail: new Buffer(src).toString('base64'),
      urn: data[index].urn,
    }));

    res.status(200).send(format);
  } catch (err) {
    res.status(500).send({});
  }
};

export default handler;
