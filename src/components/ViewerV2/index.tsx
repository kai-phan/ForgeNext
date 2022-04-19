import React from 'react';
import { ForgeViewer } from '@contecht/react-adsk-forge-viewer';

type Props = {
  token: string;
  urn: string;
};

const ViewerV2: React.FC<Props> = ({ token, urn }) => {
  return (
    <ForgeViewer
      token={token}
      urn={
        urn ||
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0'
      }
    />
  );
};

export default ViewerV2;
