import { NextApiHandler } from 'next';
import { AuthenticationClient, ITwoLeggedToken } from 'forge-server-utils';

const handler: NextApiHandler<ITwoLeggedToken> = async (req, res) => {
  const client = new AuthenticationClient(
    process.env.FORGE_CLIENT_ID!,
    process.env.FORGE_CLIENT_SECRET!,
  );

  try {
    const auth = await client.authenticate([
      'data:read',
      'viewables:read',
      'data:read',
      'data:write',
      'data:create',
      'bucket:read',
      'bucket:create',
    ]);

    res.status(200).json(auth);
  } catch (err) {
    res.status(500);
  }
};

export default handler;
