import React, { useEffect } from 'react';

const Viewer = ({ instance, access_token }: any) => {
  const options = {
    env: 'AutodeskProduction2',
    api: 'streamingV2',
    accessToken: access_token,
  };

  const htmlDiv = document.getElementById('forgeViewer');
  useEffect(() => {
    if (htmlDiv?.childElementCount! >= 1) {
      return;
    }

    const viewer = new instance.Viewing.GuiViewer3D(htmlDiv);

    instance.Viewing.Initializer(options, function () {
      const startedCode = viewer.initialize();
      if (startedCode > 0) {
        console.error('Failed to create a Viewer: WebGL not supported.');
        return;
      }

      instance.Viewing.Document.load(
        'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cXV5XzEyMDk5My9yYWNfYmFzaWNfc2FtcGxlX3Byb2plY3QucnZ0',
        (doc: any) => {
          const bubbleRoot = doc.getRoot();
          console.log(bubbleRoot);
        },
        function onErrorCallback(errCode: any, errMsg: any) {
          console.error('Failed to load [' + errCode + '] ' + errMsg);
        },
      );
    });
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-lg-9">
        <div id="forgeViewer" />
      </div>
    </div>
  );
};

export default React.memo(Viewer);
