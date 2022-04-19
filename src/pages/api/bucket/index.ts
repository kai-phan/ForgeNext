import { NextApiHandler } from 'next';
import { DataManagementClient } from 'forge-server-utils';

const handler: NextApiHandler = async (req, res) => {
  const bucket = new DataManagementClient({
    client_id: process.env.FORGE_CLIENT_ID!,
    client_secret: process.env.FORGE_CLIENT_SECRET!,
    token: req.body.token,
  });

  const bucket_res = await bucket.listObjects(process.env.FORGE_BUCKET!);

  res.status(200).json(bucket_res);
};

export default handler;
